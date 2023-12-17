import React from "react";
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Preview,
  Row,
  Heading,
  Button,

  Text,
} from "@react-email/components";

  export default function Survey(props) {
  
    const { editValues } = props;
    const {
    image,
    nameInformation,
    contactInfo,
    firstParagraph,
    secondParagraph,
    thirdParagraph,
    fourthParagraph,
    SurveyLink,
    companyName,
    websiteLink,

  } = editValues;


    return (
      <Html>
        <Head />
        <Body style={main}>
          <Container style={container}>
            <Section style={logo}>
              <Img width={200} height={200} src={image}/>
            </Section>
            <Section style={content}>
              <Img />
  
              <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    Hi,
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                    }}
                  >
                    {firstParagraph}
                   </Heading>
  
                  <Text style={paragraph}>

{secondParagraph}                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                  <Link style={linkStyle} href={websiteLink}>
                    Our website
                    </Link>
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                  
                  {thirdParagraph}
                  </Text>
                  <Text style={paragraph}>

{fourthParagraph}                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                  Best regards,

                  <br/>
                  <br/>
                  <span style={cursiveFont}>{nameInformation}</span>

                    <br/>
                    <br/>
                    <span style={cursiveFont}>{companyName}</span>
                    <br/>
                    <br/>
                    <span style={italicFont}>{contactInfo}</span>
                   </Text>
                </Column>
              </Row>
              
              <Row style={{ ...boxInfos, paddingTop: '0' }}>
                <Column style={containerButton} colSpan={2}>
                  <Button href={SurveyLink} style={button}>Take the survey</Button>
                </Column>
              </Row>
            </Section>
  
            <Section style={containerImageFooter}>
              <Img  />
            </Section>
  
            <Text
              style={{
                textAlign: 'center',
                color: '#000ff',
                fontSize: 12,
              }}
            >
              © 2023 | {companyName}
            </Text>
          </Container>
        </Body>
      </Html>
    );
  };
  
  
  const main = {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const linkStyle = {
    fontFamily: "Playfair Display, serif",
    textDecoration: "none",
    marginRight: "10px",
    marginBottom: "10px", 
  };

  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: '30px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',     
  

  };
  const container = {
  maxWidth: "600px",
  margin: "auto",
  backgroundColor: "#ff33",
  borderRadius: 5,
  overflow: "hidden",
};
  const containerButton = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };
  
  const button = {
    backgroundColor: '#0000FF',
    padding: '12px 30px',
    borderRadius: 3,
    color: '#fff',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
  };
  const italicFont = {
    fontStyle: 'italic', 
  };
  const cursiveFont = {
    fontFamily: 'cursive', 
  };
    
  const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
  };
  
  const boxInfos = {
    padding: '20px 40px',
  };
  
  const containerImageFooter = {
    padding: '45px 0 0 0',
  };
  