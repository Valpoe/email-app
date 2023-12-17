import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";
export default function StockAlertEmail(props) {
  const { editValues } = props;
  const {
    title,
    description,
    description2,
    linkText,
    linkUrl,
    hintText,
    companyLogo,
    companyName,
    companyAddress,
  } = editValues;

  return (
    <Html>
      <Head />
      <Preview>Stock Alert</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{title}</Heading>
          <Text style={text}>{description}</Text>
          <Text style={text}>
            <strong>{description2}</strong>
          </Text>
          <Link
            href={linkUrl}
            target="_blank"
            style={{
              ...link,
              display: "block",
            }}
          >
            👉 {linkText} 👈
          </Link>
          <Text
            style={{
              ...text,
              color: "#ababab",
            }}
          >
            {hintText}
          </Text>
          <Text style={footer}>
            <Img style={sectionLogo} src={companyLogo} alt="Company Logo" />
            {companyName}
            , the all-in-one-store
            <br />
            for your needs, gifts, and more.
          </Text>
          <Text
            style={{
              ...text,
              fontSize: "12px",
              marginBottom: "50px",
            }}
          >
            {companyAddress}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
  borderRadius: 5,
  backgroundColor: "#f4f4f4",
  textAlign: "center",
};

const sectionLogo = {
  display: "block",
  margin: "24px auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "36px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
