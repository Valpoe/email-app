import React from "react";

// Email component imports
import StockAlertEmail from "../app/emails/stock-alert";
import PolicyUpdateEmail from "../app/emails/policy-update";
import ChristmasSaleEmail from "../app/emails/christmas-shop";
import TipsEmail from "../app/emails/tips-email";
import Survey from "../app/emails/survey";
import WeeklyUpdateEmail from "../app/emails/weekly-update";

// Icon imports
import PolicyIcon from "@mui/icons-material/Policy";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ParkIcon from '@mui/icons-material/Park';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import UpdateIcon from '@mui/icons-material/Update';

// Email component array
export const emailComponentRenders = [
  {
    name: "Weekly Update",
    description: "This is the Weekly Update template",
    href: "/templates/weekly-update",
    emailSubject: "Weekly Update",
    icon: <UpdateIcon style={{ fontSize: 80 }} />,
    component: WeeklyUpdateEmail,
    editValues: {
      title: "CodePen Challenge",
      secondTitle: "This week: #CodePenChallenge - Cubes",
      description: "Last week, we kicked things off with round shapes. We rounded up the Pens from week one in our #CodePenChallenge: Round collection.",
      description2: "This week, we're going to the opposite end of the spectrum. We want you to make something with cubes! This week's starter template features an ice cube emoji to help inspire a cool idea for your Pen. As always, the template is just as jumping off point. Feel free to incorporate the 🧊 in your creation, add more elements, or freeze it out completely and start over from scratch!",
      linkText: "See the challenge",
      linkUrl: "https://example.com",
      bodyImage: "/images/codepencube.jpg",
      yellowBoxDescription: "To participate: Create a Pen → and tag it codepenchallenge and cpc-cubes. We'll be watching and gathering the Pens into a Collection, and sharing on Twitter and Instagram",
      yellowCardsTitle: "IDEAS!",
      yellowCardDescription: "This week we move from 2 dimensions to three! Maybe you could exercise your perspective in CSS to create a 3D cube. Or, you can try out creating 3D shapes in JavaScript, using WebGL or building a Three.js scene.",
      yellowCardDescription2: "There's more to cubes than just six square sides. There are variations on the cube that could be fun to play with this week: cuboid shapes are hexahedrons with faces that aren't always squares. And if you want to really push the boundaries of shape, consider the 4 dimensional tesseract!",
      blueCardsTitle: "RESOURCES!",
      blueCardDescription: "Learn all about How CSS Perspective Works and how to build a 3D CSS cube from scratch in Amit Sheen's in-depth tutorial for CSS-Tricks. Or, check out stunning examples of WebGL cubes from Matthias Hurrle: Just Ice and Posing.",
      blueCardDescription2: "Did that spherical cubes concept pique your interest? Explore Ryan Mulligan's Cube Sphere, Munir Safi's 3D Sphere to Cube Animation With Virtual Trackball and Ana Tudor's Infinitely unpack prism for more mindbending cube concepts that test the boundaries of how shapes interact with each other.",
      footerLinkText: "Go to Challenge Page",
      footerLinkUrl: "https://example.com",
    }
  },
  {
    name: "Stock Alert",
    description: "This is the Stock Alert template",
    href: "/templates/stock-alert",
    emailSubject: "Your item is back in stock!",
    icon: <NotificationsActiveIcon style={{ fontSize: 80 }} />,
    component: StockAlertEmail,
    editValues: {
      title: "The wait is over",
      description: "Your wait list item(s) is in stock & available now!",
      description2: "Hurry, availability is guaranteed only when checkout is complete.",
      linkText: "To the store",
      linkUrl: "https://example.com",
      hintText: "Hint: You can remove items from your wait list at any time",
      companyLogo: "/images/placeholder-50-50.jpg",
      companyName: "BlueFox Oy",
      companyAddress: "Esc. 630 Monte Julio César 42, Badalona, Ast 94943",
    },
  },
  {
    name: "Christmas shop",
    description: "Christmas shop",
    href: "/templates/christmas-shop",
    icon: <ParkIcon style={{ fontSize: 80 }} />,
    emailSubject: "Winter tale",
    component: ChristmasSaleEmail,
    editValues: {
      description: "Christmas email template",
      title: "Winter tale",
      SaleHeading: "SALE",
      SaleText1: "-50%",
      SaleText2: "ON ALL ITEMS",
      Website: "https://example.com",
      Salelink: "https://example.com",
      UnsubscribeLink: "https://example.com",
      fbLink: "https://example.com",
      twitterLink: "https://example.com",
      igLink: "https://example.com",
      image:
        "https://www.reshot.com/preview-assets/icons/GCE47HR9MW/hop-GCE47HR9MW.svg", 
    },
  },
  {
    name: "Survey",
    description: "Survey",
    href: "/templates/survey",
    icon: <ParkIcon style={{ fontSize: 80 }} />,
    emailSubject: "Survey",
    component: Survey,
    editValues: {
      description: "Survey",
      title: "Survey",
      firstParagraph: "We hope this message finds you well. We are committed to providing the best possible experience for our customers, and your feedback is invaluable in helping us achieve that goal.",
      secondParagraph: "We would appreciate it if you could take a few minutes to share your thoughts and opinions with us through our customer satisfaction survey. Your responses will help us understand your experience and make improvements where needed.",
      websiteLink: "https://example.com",
      thirdParagraph:"Your feedback is important to us, and to show our gratitude for your time, you will be entered into a drawing to win.",
      fourthParagraph:"Thank you for being a valued customer. We look forward to hearing from you and continuously improving our services based on your input.",
      nameInformation: "Your name",
      companyName: "Example company",
      contactInfo: "Contact info",
      SurveyLink: "https://example.com",
      image:
        "https://www.svgrepo.com/show/530601/hot-air-balloon.svg", 
    },
  },
  {
    name: "Policy Update",
    description: "This is the template for policy updates",
    href: "/templates/policy-update",
    icon: <PolicyIcon style={{ fontSize: 80 }} />,
    emailSubject: "Policy Update",
    component: PolicyUpdateEmail,  
    editValues: {
      companyLogo: "/images/placeholder-50-50.jpg",
      companyName: "BlueFox Oy",
      companyAddress:
        "© 2023 BlueFox Oy 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
      title: "POLICY UPDATE",
      recipient: "Subscribers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      description2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et. Egestas sed tempus urna et pharetra pharetra. Sagittis purus sit amet volutpat consequat.",
      footerText:
        "You have received this mandatory email service announcement to update you about important changes to your BlueFox service.",
      linkText: "Contact us",
      linkUrl: "https://example.com",
    },
  },
  {
    name: "Tips and Tricks",
    description: "This is the template for tips and reminders",
    href: "/templates/tips-email",
    icon: <TipsAndUpdatesIcon style={{ fontSize: 80 }} />,
    emailSubject: "Tips and reminders",
    component: TipsEmail,
    editValues: {
      companyLogo: "/images/placeholder-50-50.jpg",
      title: "Find what you want",
      subtitle: "Tips and tricks for using searching on BlueFox",
      firstHeading: "Search for a specific email",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      secondHeading: "Use the search bar to find what you need",
      description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      thirdDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      footerHeading: "Need more help?",
      footerLinkText: "Take a look at our help center",
      footerLinkUrl: "https://example.com",
      companyName: "BlueFox Oy",
      companyAddress: "110 William Street, 28th Floor, New York, NY 10038",
    },
  },
];
