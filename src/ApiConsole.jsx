import React, { useState } from "react";
import Header from "./Header";
import on from "./assets/cards/apion.png";
import off from "./assets/cards/apioff.png";
import { LuEye } from "react-icons/lu";
import { RiFileCopyLine } from "react-icons/ri";
export default function ApiConsole() {
  const [on_off, set_on_off] = useState(false);
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-94px)] flex flex-col items-center  bg-[#f8fafc]">
        <div className="w-[95%] h-auto mt-[2.5%] bg-white flex flex-col pl-6 pt-4 pb-5 gap-3 text-center">
          <span className="text-[32px] font-semibold">API Integrations</span>
          <span className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Venenatis a condimentum vitae sapien pellentesque habitant morbi.
            Adipiscing elit ut aliquam purus sit amet luctus. Sed arcu non odio
            euismod lacinia at quis risus. Massa tincidunt nunc pulvinar sapien
            et ligula. Elementum integer enim neque volutpat ac tincidunt vitae.
            Fermentum dui faucibus in ornare quam viverra. Sed felis eget velit
            aliquet sagittis. Commodo viverra maecenas accumsan lacus vel
            facilisis volutpat. Est ullamcorper eget nulla facilisi etiam
            dignissim. Cras ornare arcu dui vivamus arcu felis bibendum ut.
            Rhoncus est pellentesque elit ullamcorper dignissim. Tellus orci ac
            auctor augue mauris. Eget felis eget nunc lobortis mattis aliquam.
            Ac tincidunt vitae semper quis lectus nulla at. Dignissim convallis
            aenean et tortor. Porta lorem mollis aliquam ut porttitor. Amet
            consectetur adipiscing elit pellentesque habitant morbi tristique
            senectus. Suspendisse in est ante in nibh mauris cursus. Consectetur
            purus ut faucibus pulvinar elementum integer enim neque volutpat.
            Nulla at volutpat diam ut venenatis tellus in. Felis eget nunc
            lobortis mattis aliquam faucibus purus. Nunc aliquet bibendum enim
            facilisis gravida. Sagittis nisl rhoncus mattis rhoncus urna neque
            viverra justo. Velit sed ullamcorper morbi tincidunt ornare massa.
            Aliquam nulla facilisi cras fermentum odio eu.
          </span>
        </div>
        <div className="w-[95%] h-[300px] mt-[4.5%] bg-white flex flex-col p-6  gap-7">
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">API Integration</span>
            <div className="flex items-center gap-3">
              <span className="text-[13px]">OFF</span>
              <div
                onClick={() => {
                  set_on_off(!on_off);
                }}
              >
                {on_off ? (
                  <img src={off} alt="off_or_on" />
                ) : (
                  <img src={on} alt="off_or_on" />
                )}
              </div>
              <span className="text-[13px]">ON</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#57585A] text-[14px]">Live Secret Key</span>
            <div className="flex items-center justify-between px-5 h-[38px] w-[850px] rounded-[12px] border-[1px] border-[#E0E0E0] text-[12px]">
              <span>
                {" "}
                *************************************************************
              </span>
              <span>
                <LuEye className="h-[20px] w-[20px]" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#57585A] text-[14px]">Live Public Key</span>
            <div className="flex items-center justify-between px-5 h-[38px] w-[850px] rounded-[12px] border-[1px] border-[#E0E0E0] ">
              <span className="text-[14px]">
                sk_live_06378d79174ebrtthyuyb8fdb653d470f1587872
              </span>
              <span>
                <RiFileCopyLine className="h-[20px] w-[20px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
