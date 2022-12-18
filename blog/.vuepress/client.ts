import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  RiBilibiliLine,
  RiQqLine,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare,
  PiGengarShiny,
} from "oh-vue-icons/icons";

addIcons(
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiBilibiliLine,
  RiQqLine,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare,
  PiGengarShiny
);

export default defineClientConfig({});
