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
  Text,
} from "@react-email/components";


export default function ChristmasSaleEmail(props) {
  const { editValues } = props;
  const {
    image,
    Website,
    Salelink,
    UnsubscribeLink,
    SaleHeading,
    SaleText1,
    fbLink,
    twitterLink,
    igLink,
    SaleText2,
  } = editValues;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={sectionLogo}>
            <Img src={image} width="50" height="50" alt="Logo" style={logoStyle} />
          </Section>
          <Section style={sectionLogo}>
              <Link style={linkStyle} href={Website}>
               Website               
              </Link>
              <Link style={linkStyle} href={Salelink}>
                Sale
              </Link>
          </Section>
          <Section style={saleDetailsSection}>
            <Text style={saleText}>{SaleHeading}</Text>
            <div style={transparentCenter}></div>
            <Section style={yellowLine}></Section>

            <Text style={salePercentage}>{SaleText1}</Text>
            <Text style={saleOfferText}>{SaleText2}</Text>
            <Img src="https://www.svgrepo.com/show/43838/christmas-tree.svg" alt="Image" style={rightImage}></Img>
            </Section>
            <Link href="https://example.com" style={shopNowButtonSale}>
                Shop Now
            </Link>
            <Section style={bottomIcons}>
              <Link href={fbLink} style={{ textDecoration: "none" }}>
                <Img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-48.png" alt="Facebook Icon" style={iconStyle} />
              </Link>
              <Link href={twitterLink} style={{ textDecoration: "none" }}>
                <Img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-48.png" alt="Twitter Icon" style={iconStyle} />
              </Link>
              <Link href={igLink} style={{ textDecoration: "none" }}>
                <Img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-48.png" alt="Instagram icon" style={iconStyle} />
              </Link>
            </Section>
            <Section style={unsubscribe}>
    <Link href={UnsubscribeLink} style={{ textDecoration: "underline", color: "#cca000" }}>
      Unsubscribe
    </Link>
  </Section>
        </Container>
      </Body>
    </Html>
  );
}

  const main = {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const container = {
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "#8B0000",
    borderRadius: 5,
  };


  const flexContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const sectionLogo = {
    padding: "20px",
    height: "20px",
    marginTop:"20px",
    ...flexContainer, 
    paddingBottom: "30px"
  };

  const logoStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  };

  const linkStyle = {
    fontFamily: "Playfair Display, serif",
    textDecoration: "none",
    color: "#cca000",
    marginRight: "10px",
    marginBottom: "10px", 
  };

  
const rightImage = {
    position: "absolute",
    top: "50%",
    right: "0",
    transform: "translateY(-50%)",
    maxWidth: "100px", 
    height: "auto",
    
  };

  const saleDetailsSection = {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Playfair Display, serif",
    backgroundColor: "transparent", 
    border: "2px solid #cca200", 
    borderRadius: "10px",
  };
  
  const saleText = {
    fontSize: "24px",
    fontFamily: "Playfair Display, serif",
    fontWeight: "700",
    color: "#cca000",
    position: "relative", 
    zIndex: "1", 
  };
  
  const transparentCenter = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 4px)", 
    height: "calc(100% - 4px)", 
    backgroundColor: "transparent",
    border: "2px solid #cca200", 
    borderRadius: "8px", 
    zIndex: "0", 
  };

  
  const yellowLine = {
    backgroundColor: "#fff200",
    height: "2px", 
    margin: "10px 0",
    border: "none", 
    width: "50%",
    marginLeft: "25%"
  };
  const salePercentage = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#cca000", 
  };
  
  const saleOfferText = {
    fontSize: "16px",
    color: "#cca000", 
    marginBottom: "10px",

  };
  
  const shopNowButtonSale = {
    backgroundColor: '#127234',
    color: '#cca200',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'block',
    marginTop: '10px',
    textAlign: 'center',
  };
  
  const bottomIcons = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };
  
  const iconStyle = {
    margin: "10 20px",
    width: "24px",
    height: "24px",
  };
  
  const unsubscribe = {
    textAlign: "center",
    padding: "10px",
  };