"use client";

import React from "react";

export type RibbonProps = {
  sale: number;
};

export function Ribbon(props: RibbonProps) {
  const { sale } = props;
  return (
    <div className="relative inline-block">
      <div className="absolute -bottom-[8px] left-0 h-0 w-0 border-t-[8px] border-l-[8px] border-t-[#457833] border-l-transparent"></div>

      <div className="relative bg-[#639F44] py-2 pr-10 pl-6 text-sm font-light tracking-wide text-white shadow-sm [clip-path:polygon(0%_0%,_100%_0%,_calc(100%_-_15px)_50%,_100%_100%,_0%_100%)]">
        Sale {sale}%
      </div>
    </div>
  );
}
