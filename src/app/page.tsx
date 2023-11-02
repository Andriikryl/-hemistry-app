import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import PeriodicTable from "@/components/periodicTable/PeriodicTable";

export default function Home() {
  return (
    <>
      <Hero />
      <PeriodicTable />
    </>
  );
}
