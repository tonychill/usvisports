import Head from "next/head";
import Image from "next/image";
import MainFeed from "../components/ui/MainFeed";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mt-16">
      <MainFeed />
    </div>
  );
}
