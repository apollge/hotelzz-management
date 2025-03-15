"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";

const page = () => {
  return <NextStudio config={config} />;
};

export default page;
