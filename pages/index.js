import Head from "next/head";
import Image from "next/image";
import {useState} from "react";
import BuyModal from "../components/BuyModal";
import SubjectsModule from "../modules/module-subjects";
import styles from "../styles/Home.module.css";

export default function Home() {
  const data = {
    engineering: {
      subjects: [
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electronic Engineering",
        "Chemical Engineering",
        "Electronic Engineering",
        "Computer Engineering",
        "Biomedical Engineering",
        "Data Analysis",
      ],
      from: "indigo-200",
      via: "purple-200",
      to: "pink-200",
    },
    nonEngineering: {
      subjects: [
        "History & Arts",
        "Writing Courses",
        "Math",
        "Calculus 1,2,3",
        "Physics",
        "Chemistry",
      ],
      from: "white",
      via: "",
      to: "white",
      bgColor: "white",
    },
  };

  return (
    <>
      <Head>
        <title>Home | Quick Homeworks</title>
      </Head>
      <section
        className={`${styles.hero} py-24 bg-violet-400 flex items-center`}
      >
        <div className="container md:grid-cols-2">
          <div className="hero-title-box">
            <h1 className="text-6xl mb-6 text-white font-bold break-words">
              Quick Homeworks
            </h1>
            <p className="text-xl text-white">
              We help you complete your assignments and homeworks
            </p>
          </div>
        </div>
      </section>
      <section className="subjects subjects-engineering">
        <div className="container">
          <article>
            <h3 className="text-3xl font-semibold mb-6">Engineering</h3>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-8">
              <SubjectsModule data={data.engineering} />
            </div>
          </article>
        </div>
      </section>
      <section className="subjects subjects-medical bg-[#fafafa]">
        <div className="container">
          <article>
            <h3 className="text-3xl font-semibold mb-6">Non Engineering</h3>
            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-8 ">
              <SubjectsModule data={data.nonEngineering} />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
