"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

export const ClientMotionDiv = forwardRef(function ClientMotionDiv(props, ref) {
  return <motion.div ref={ref} {...props} />;
});

export const ClientMotionArticle = forwardRef(function ClientMotionArticle(props, ref) {
  return <motion.article ref={ref} {...props} />;
});
