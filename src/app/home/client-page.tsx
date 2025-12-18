"use client";
import { IconCalendarWeek } from "@tabler/icons-react";
import { BellIcon, PlusIcon } from "lucide-react";
import { api } from "@/lib/trpc/react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { CreatePatienFormInput } from "@/server/api/routers/patienForm.input";
import { createClient } from "@supabase/supabase-js";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ribbon } from "@/components/common/ribbon";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
type DraftField = {
  user_id: number;
  field: string;
  value: any;
};

export default function ClientPage() {
  const product = [
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
  ];
  return (
    <div>
      <div>
        <img src="/avatars/Group 11.png" alt="" className="w-full" />
      </div>
      <div className="my-16 py-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {product.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/5 lg:basis-1/5 xl:basis-1/7"
              >
                <div className="items-center justify-items-center p-1">
                  <Avatar className="h-[200px] w-[200px] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px]">
                    <AvatarImage src={item.picture} className="object-cover" />
                  </Avatar>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col gap-4 px-8 pt-[2vh] pb-[2vh] sm:mx-8 sm:px-6 md:mx-8 lg:mx-16 lg:px-8">
        <h1 className="text-[32px] font-black text-[#639F44]">New Arrival</h1>
        <CardProductArrival />
      </div>
      <div className="flex flex-col gap-4 px-8 pt-[2vh] pb-[2vh] sm:mx-8 sm:px-6 md:mx-8 lg:mx-16 lg:px-8">
        <h1 className="text-[32px] font-black text-[#639F44]">Contents</h1>
        <CardContents />
      </div>
    </div>
  );
}

function CardProductArrival() {
  const product = [
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 pt-4 pb-32 md:gap-6 md:py-2">
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-4 lg:px-4 @xl/main:grid-cols-4 @5xl/main:grid-cols-4">
          {product.map((item, index) => (
            <Card
              key={index}
              className="relative rounded-2xl border bg-white py-0 shadow-sm"
            >
              {item.sale > 0 && (
                <div className="absolute top-45 -left-2 z-10">
                  <Ribbon sale={item.sale} />
                </div>
              )}
              <div className="grid grid-cols-1">
                <div className="flex items-center">
                  <img
                    className="inset-0 h-[250px] w-full rounded-t-2xl object-cover"
                    src={item.picture}
                  />
                </div>

                <div className="flex flex-col px-4 py-2">
                  <span className="text-muted-foreground text-sm">
                    {item.code}
                  </span>
                  <strong className="text-[24px] text-[#1A1A1A]">
                    {item.name}
                  </strong>
                  <div className="grid grid-cols-2">
                    <div>
                      <strong className="text-[32px] text-[#FF4B4B]">
                        {item.price.toLocaleString()}
                      </strong>
                      <span className="text-[#757575]">/ {item.unit}</span>
                    </div>
                    <div className="justify-self-end">
                      <Button
                        size="icon-lg"
                        className="rounded-[25px] bg-[#639F44] pr-0 pl-0 hover:border-[#4E7F35] hover:bg-[#4E7F35]"
                      >
                        <PlusIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
function CardContents() {
  const product = [
    {
      name: "Waste 1",
      picture: "/avatars/image 5.png",
      code: "wa-102-220",
      price: 5200,
      unit: "kg",
      sale: 10,
    },
    {
      name: "Waste 2",
      picture: "/avatars/image 6.png",
      code: "wa-102-220",
      price: 1000,
      unit: "kg",
      sale: 20,
    },
    {
      name: "Waste 3",
      picture: "/avatars/image 7.png",
      code: "wa-102-220",
      price: 6400,
      unit: "kg",
      sale: 0,
    },
    {
      name: "Waste 4",
      picture: "/avatars/image 8.png",
      code: "wa-102-220",
      price: 6010,
      unit: "kg",
      sale: 0,
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 pt-4 pb-32 md:gap-6 md:py-2">
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-4 @xl/main:grid-cols-4 @5xl/main:grid-cols-4">
          {product.map((item, index) => (
            <div key={index} className="group relative aspect-square w-full max-w-md cursor-pointer overflow-hidden rounded-3xl shadow-xl">
              <img
                src={item.picture}
                alt="Pile of plastic scrap"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute top-2 right-5">
                <img
                  src="/avatars/logo.svg"
                  alt="Pile of plastic scrap"
                  className="w-20"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl leading-tight font-semibold text-white drop-shadow-lg md:text-xl">
                    Effective recovery & qualityimprovement of aluminium scrap
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
