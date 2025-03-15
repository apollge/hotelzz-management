"use client";

import CountUpNumber from "@/components/CountUpNumber/CountUpNumber";
import { FC, ReactNode } from "react";

type ClientComponentProps = {
  heading1: ReactNode;
  section2: ReactNode;
};

const ClientComponent: FC<ClientComponentProps> = ({ heading1, section2 }) => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        {heading1}

        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Basic Room</p>

            <CountUpNumber endValue={120} duration={1500} />
          </div>

          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Luxury Room</p>

            <CountUpNumber endValue={60} duration={1500} />
          </div>

          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Suite</p>

            <CountUpNumber endValue={30} duration={1500} />
          </div>
        </div>
      </div>

      {/* Images */}
      {section2}
    </section>
  );
};

export default ClientComponent;
