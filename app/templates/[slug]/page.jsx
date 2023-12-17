"use client";
import * as React from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import ReactToPrint from "react-to-print";
import "@uploadthing/react/styles.css";

// MUI imports
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Drawer,
  TextField,
  Card,
  CardContent,
  Divider,
  Alert,
  AlertTitle,
  Avatar,
} from "@mui/material";

// Icon imports
import {
  Send as SendIcon,
  Download as DownloadIcon,
  Print as PrintIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";

import { UploadButton } from "../../../components/uploadthing";

// React-email imports
import { render } from "@react-email/render";

// Email component imports
import { emailComponentRenders } from "../../../components/EmailComponents";

export default function TemplatesPage({ params }) {
  const [recipientEmails, setRecipientEmails] = useState([]);
  const [alert, setAlert] = useState(null);
  const [sendCount, setSendCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const [printCount, setPrintCount] = useState(0);
  const [sendDate, setSendDate] = useState(null);
  const contentRef = useRef(null);

  // Toast config
  const createToastConfig = (message) => ({
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    message,
  });

  const resetFieldsToast = () =>
    toast.success("Fields resetted!", createToastConfig("Fields resetted!"));
  const saveDraftToast = () =>
    toast.success("Draft saved!", createToastConfig("Draft saved!"));

  // Find the selected component based on the slug in the URL
  const selectedComponent = emailComponentRenders.find(
    (component) => component.href === `/templates/${params.slug}`
  );

  // Get the initial field values from the selected component
  const initialFieldValues = selectedComponent?.editValues || {};

  // Get the initial field values from local storage or the selected component, check if the page has been mounted with if (typeof window !== "undefined")
  const draftFieldValues =
    typeof window !== "undefined"
      ? localStorage.getItem(`emailDraft_${params.slug}`)
        ? JSON.parse(localStorage.getItem(`emailDraft_${params.slug}`))
            .fieldValues
        : {}
      : {};

  // Set the initial field values, check if draftFieldValues has been set, if so, set the field values to the draft data, otherwise, set the field values to the selected component's edit values
  const [fieldValues, setFieldValues] = useState(
    Object.keys(draftFieldValues).length > 0
      ? draftFieldValues
      : initialFieldValues
  );
  // Memoize the rendered email content
  const memoizedEmailContent = useMemo(() => {
    return selectedComponent
      ? render(<selectedComponent.component editValues={fieldValues} />, {
          pretty: true,
        })
      : null;
  }, [selectedComponent, fieldValues]);

  const [emailContentKey, setEmailContentKey] = useState(0);

  // Save draft to local storage
  const saveDraft = useCallback(() => {
    const draftData = {
      fieldValues,
      recipientEmails,
    };

    console.log(`Saving draft for template ${params.slug}:`, draftData);

    localStorage.setItem(
      `emailDraft_${params.slug}`,
      JSON.stringify(draftData)
    );
    saveDraftToast();
  }, [fieldValues, recipientEmails, params.slug]);

  // Print iframe
  const PrintIframeContent = async () => {
    await addCount("print");
  };

  // DL PDF iframe
  const DownloadIframeContent = async () => {
    const content = document.getElementById("emailContent");

    if (content) {
      const emailContent = content.innerHTML;

      const blob = new Blob([emailContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "email_template.html";
      document.body.appendChild(a);
      a.click();

      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      await addCount("download");

      updateCounters();
    }
  };

  // Handle changes to the field values
  const handleFieldChange = (fieldName, value) => {
    console.log(`Changing field "${fieldName}" to "${value}"`);
    setFieldValues({
      ...fieldValues,
      [fieldName]: value,
    });
  };

  // Reset the field values to the initial values
  const handleFieldReset = () => {
    console.log("Resetting fields");
    resetSelectedComponentEditValues();
    resetFieldsToast();
  };

  // Handle beforeunload to reset localStorage when the page is fully reloaded
  const handleBeforeUnload = (event) => {
    resetSelectedComponentEditValues();
  };

  useEffect(() => {
    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  // Handle changes to the recipient email addresses
  const handleRecipientChange = (e, index) => {
    const newRecipientEmails = [...recipientEmails];
    newRecipientEmails[index] = e.target.value;
    setRecipientEmails(newRecipientEmails);
  };

  // Add a recipient email address
  const handleAddRecipient = () => {
    setRecipientEmails([...recipientEmails, ""]);
  };

  // Remove a recipient email address
  const handleRemoveRecipient = (index) => {
    const newRecipientEmails = [...recipientEmails];
    newRecipientEmails.splice(index, 1);
    setRecipientEmails(newRecipientEmails);
  };

  // Render the editing fields and upload buttons
  const renderEditFields = (editValues) => {
    const formatLabel = (fieldName) => {
      return fieldName
        .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before uppercase letters
        .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
    };

    return Object.keys(editValues).map((fieldName) => {
      const fieldValue = fieldValues[fieldName];
      const initialFieldValue = initialFieldValues[fieldName];

      // Determine the field type based on characters
      const isMultiline = initialFieldValue.length > 20;

      if (
        fieldName.toLowerCase().includes("image") ||
        fieldName.toLowerCase().includes("logo")
      ) {
        return (
          <div key={fieldName} style={{ textAlign: "left", margin: "10px 0" }}>
            <Typography gutterBottom style={{ fontSize: "0.8rem" }}>
              {formatLabel(fieldName)}
            </Typography>
            <div className="flex items-center">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  if (fieldValues[fieldName]) {
                    console.log("IMAGE: " + res[0].url);
                    updateImage(fieldName, res[0].url);
                  }
                }}
                onUploadError={(error) => {
                  console.error(`ERROR! ${error.message}`);
                }}
                className="w-20 h-12"
              />
            </div>
          </div>
        );
      } else {
        // Render a standard text field for other parameters
        return (
          <TextField
            key={fieldName}
            label={formatLabel(fieldName)}
            value={fieldValue}
            onChange={(e) => handleFieldChange(fieldName, e.target.value)}
            style={{ margin: "4px 0", width: "100%" }}
            variant="standard"
            multiline={isMultiline}
          />
        );
      }
    });
  };

  // Download count
  const addCount = async (action) => {
    try {
      const response = await fetch("/api/template", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: initialFieldValues.title,
          action: action,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Error in addCount (${action}): ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Error in addCount (${action}):`, error);
    }
  };

  useEffect(() => {
    const fetchObjectByTitle = async () => {
      try {
        const title2 = initialFieldValues.title;
        const response = await fetch(`/api/template/getCount?title=${title2}`, {
          cache: "no-store",
        });
        const result = await response.json();

        setDownloadCount((prevData) => JSON.stringify(result.downloadCount));
        setSendCount((prevData) => JSON.stringify(result.sentCount));
        setPrintCount((prevData) => JSON.stringify(result.printCount));

        const date = result.updatedAt ? new Date(result.updatedAt) : null;
        setSendDate(date);
      } catch (error) {
        console.error("Error in fetchObjectByTitle:", error);
      }
    };
    fetchObjectByTitle();
  }, []);

  // Send an email with the selected component, check the email address is valid, and show an alert
  const sendEmail = async (fieldValues) => {
    console.log("Sending email");

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the recipientEmails array is empty
      if (recipientEmails.length === 0) {
        setAlert({
          type: "error",
          message: "Recipient emails are required",
        });
        return;
      }

      for (const email of recipientEmails) {
        // Check if an email address is empty or invalid
        if (!email.trim() || !emailRegex.test(email)) {
          setAlert({
            type: "error",
            message: "Invalid recipient email address",
          });
          setRecipientEmails([""]);
          return;
        }
      }

      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: params.slug,
          recipientEmails: recipientEmails,
          editValues: fieldValues,
        }),
      });

      if (response.ok) {
        //Reload counter
        await addCount("sent");

        const countResponse = await fetch(
          `/api/template/getCount?title=${initialFieldValues.title}`
        );
        if (countResponse.ok) {
          const countResult = await countResponse.json();
          setSendCount(JSON.stringify(countResult.downloadCount));
          updateCounters();
        }
        setAlert({
          type: "success",
          message: "Email sent successfully",
        });
        setRecipientEmails([""]);
      } else {
        setAlert({
          type: "error",
          message: "Error sending email",
        });
        setRecipientEmails([""]);
      }
      console.log("Email sent with slug:", params.slug);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to update counters
  const updateCounters = async () => {
    try {
      const response = await fetch(
        `/api/template/getCount?title=${initialFieldValues.title}`
      );
      if (response.ok) {
        const result = await response.json();
        setDownloadCount(JSON.stringify(result.downloadCount));
        setSendCount(JSON.stringify(result.sentCount));
        setPrintCount(JSON.stringify(result.printCount));
      }
    } catch (error) {
      console.error("Error in updateCounters:", error);
    }
  };

  // Resetting the editValues of the selected component
  const resetSelectedComponentEditValues = () => {
    const selectedComponent = emailComponentRenders.find(
      (component) => component.href === `/templates/${params.slug}`
    );
    const initialFieldValues = selectedComponent?.editValues || {};
    // Clearing localStorage for the specific component
    localStorage.removeItem(`emailDraft_${params.slug}`);

    setFieldValues(initialFieldValues);
    setEmailContentKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  const updateImage = useCallback(
    (fieldName, imageUrl) => {
      setFieldValues((prevFieldValues) => ({
        ...prevFieldValues,
        [fieldName]: imageUrl,
      }));
    },
    [setFieldValues]
  );

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={5}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              color="text.secondary"
            >
              Preview of {selectedComponent?.name}
            </Typography>
            <div
              id="emailContent"
              ref={contentRef}
              key={emailContentKey} // key to force re-render
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                margin: "10px 0",
                // overflowY: "auto",
              }}
              dangerouslySetInnerHTML={{ __html: memoizedEmailContent }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              color="text.secondary"
            >
              Editing Fields
            </Typography>
            <Card variant="outlined" sx={{ margin: "16px 0" }}>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {selectedComponent &&
                    renderEditFields(selectedComponent.editValues)}
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: "16px 16px 8px 0", width: "48%" }}
                    onClick={handleFieldReset}
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      Reset fields
                    </Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: "16px 0 8px", width: "48%" }}
                    onClick={() => saveDraft(params.slug)}
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      Save Draft
                    </Typography>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <div style={{ margin: "16px 0" }}>
          {alert && (
            <Alert severity={alert.type} onClose={() => setAlert(null)}>
              <AlertTitle>
                {alert.type === "success" ? "Success" : "Error"}
              </AlertTitle>
              {alert.message}
            </Alert>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card variant="outlined" sx={{ width: 256, height: "100%" }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="text.secondary"
              >
                Options
              </Typography>
              {recipientEmails.map((email, index) => (
                <div key={index}>
                  <TextField
                    variant="standard"
                    label={`Recipient email ${index + 1}`}
                    value={email}
                    onChange={(e) => handleRecipientChange(e, index)}
                    style={{ margin: "4px 0" }}
                  />
                  {index === recipientEmails.length - 1 && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ margin: "4px", marginTop: 10 }}
                      endIcon={<RemoveIcon />}
                      onClick={() => handleRemoveRecipient(index)}
                    >
                      <Typography sx={{ color: "text.secondary" }}>
                        Remove
                      </Typography>
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: "4px", marginTop: 10 }}
                endIcon={<AddIcon />}
                onClick={handleAddRecipient}
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Add recipient
                </Typography>
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: "4px", marginTop: 10 }}
                endIcon={<SendIcon />}
                onClick={() => sendEmail(fieldValues)}
              >
                <Typography sx={{ color: "text.secondary" }}>Send</Typography>
              </Button>
              <Divider
                variant="middle"
                sx={{
                  margin: "16px 0",
                  height: "2px",
                  backgroundColor: "text.secondary",
                }}
              />
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: "4px", marginTop: 10 }}
                endIcon={<DownloadIcon />}
                onClick={DownloadIframeContent}
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Download
                </Typography>
              </Button>
              <Divider
                variant="middle"
                sx={{
                  margin: "16px 0",
                  height: "2px",
                  backgroundColor: "text.secondary",
                }}
              />
              <ReactToPrint
                trigger={() => (
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ margin: "4px" }}
                    endIcon={<PrintIcon />}
                  >
                    <Typography sx={{ color: "text.secondary" }}>
                      Print
                    </Typography>
                  </Button>
                )}
                content={() => contentRef.current}
                onBeforePrint={PrintIframeContent}
                onAfterPrint={() => {
                  updateCounters();
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "16px",
          }}
        >
          <Card variant="outlined" sx={{ width: 256, height: "100%" }}>
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="text.secondary"
                marginBottom={2}
              >
                Data for {selectedComponent?.name}
              </Typography>
              <div
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.dark",
                    color: "primary.contrastText",
                    marginRight: 1,
                  }}
                  variant="rounded"
                >
                  <SendIcon />
                </Avatar>
                <Typography sx={{ color: "text.secondary", marginLeft: 2 }}>
                  Sent: {sendCount}
                </Typography>
              </div>
              <div
                style={{
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "primary.dark",
                    color: "primary.contrastText",
                    marginRight: 1,
                  }}
                  variant="rounded"
                >
                  <DownloadIcon />
                </Avatar>
                <Typography sx={{ color: "text.secondary", marginLeft: 2 }}>
                  Downloads: {downloadCount}
                </Typography>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: "primary.dark",
                    color: "primary.contrastText",
                    marginRight: 1,
                  }}
                  variant="rounded"
                >
                  <PrintIcon />
                </Avatar>
                <Typography sx={{ color: "text.secondary", marginLeft: 2 }}>
                  Prints: {printCount}
                </Typography>
              </div>
              <Divider
                variant="middle"
                sx={{
                  margin: "16px 0",
                  height: "2px",
                  backgroundColor: "text.secondary",
                }}
              />
              <div style={{ textAlign: "center" }}>
                <Typography sx={{ color: "text.secondary" }}>
                  Template sent last:
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.dark",
                      color: "primary.contrastText",
                      width: 100,
                      height: 40,
                      fontSize: "1rem",
                    }}
                    variant="rounded"
                  >
                    {sendDate
                      ? sendDate.toLocaleString("fi-FI", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })
                      : "Loading..."}
                  </Avatar>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Drawer>
    </Container>
  );
}
