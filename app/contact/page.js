"use client";
import Connect from "../components/contact/Connect";
import ContactDetails from "../components/contact/ContactDetails";
import ContactInfo from "../components/contact/ContactInfo";
import { MapComponent } from "../components/contact/MapComponent/index";

export default function ContactPage() {
  return (
    <>
      <ContactInfo />
      <ContactDetails />
      <MapComponent />
      <Connect />
    </>
  );
}
