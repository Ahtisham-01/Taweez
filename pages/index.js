import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
const inter = Inter({ subsets: ["latin"] });
import Header from "../components/header";
import Code from "../components/code";

export default function Home() {
  return (
    <>
      <Layout nav={true}>
        {/* {isLoading ? (
            <div className="flex w-full h-screen my-auto items-center justify-center">
                <BlackSpinner width="60" height="60" />
            </div>
        ) :
        
        ( */}
        <main>
          <Header title={"Home"} />
          <div className="w-full mx-auto px-2 max-w-[1124px]">
            <div className=" mt-[24px] ">
              <div className="inline-flex items-center w-full background-dashboard mb-[28px]  justify-start  h-[96px] p-5 rounded-xl">
                <div className="inline-flex flex-col space-y-4 items-start justify-start">
                  <p className="text-2xl font-extrabold leading-normal text-white">
                    Welcome to TAWEEZ
                  </p>
                  <p className="text-base font-medium leading-none f-f-m text-gray-50 text-opacity-60">
                    Get an Overview of all the stats from this page
                  </p>
                </div>
              </div>
              <Code />
            </div>
          </div>
        </main>
        {/* )} */}
      </Layout>
    </>
  );
}
