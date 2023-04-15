import React from "react";
import dynamic from "next/dynamic";
import customData from "../../components/data.json";
console.log(customData);
import "@uiw/react-textarea-code-editor/dist.css";
const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);
const index = () => {
  const [code, setCode] = React.useState([
    {
      title: "code1",
      code: `import Image from "next/image";
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
  `,
    },
    {
      title: "code2",

      code: `import Image from "next/image";
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
    `,
    },
  ]);
  return (
    <div>
      <div>
        {code.map((item) => {
          return (
            <>
            <div className="bg-black">

            <h1 className="font-bold text-2xl text-stone-100">
                {item.title}
            </h1>
            </div>
            <CodeEditor
              value={item.code}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontSize: 12,
                backgroundColor: "#f5f5f5",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default index;
