"use client"
import { CalendarIcon, ClockIcon, Flag, MapPin } from "lucide-react"
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { format } from 'date-fns';
import { type RouterOutput } from "@/server/api/root";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Meetings = RouterOutput["meetings"]["getCalendar"][0]
type MeetingItemProps = {
  data: Meetings
  isAdmin: boolean
}


export const MeetingItem = ({ data }: MeetingItemProps) => {
  const { name, isEvent } = data
  const date = new Date(data.date);
  const [isEditing] = useState<boolean>((false));

  const getTimeFormat = (date: Date): string => {
    // am or pm
    return format(date, 'h:mm a');
  }
  const getDateFormat = (date: Date): string => {
    return format(date, 'MMMM d, yyyy EEEE');
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex flex-row justify-between gap-2 w-full">
          <div>{getTimeFormat(date)}</div>
          -
          <div>{name}</div>
        </div>
      </SheetTrigger>
      <SheetContent >
        <SheetHeader className='text-xl font-semibold items-center align-middle justify-between flex flex-row'>
          {

            isEditing ?
              <input
                type="text"
                value={name ?? ''}
                onChange={(e) => console.log(e.target.value)}
                className='w-full'
              />
              : name
          }
        </SheetHeader>
        <div className='flex flex-col py-4 gap-4'>
          <div className='flex flex-row gap-4'>
            <CalendarIcon />
            {getDateFormat(date)}
          </div>

          <div className='flex flex-row gap-4'>
            <ClockIcon />
            {getTimeFormat(date)}
          </div>

          <div className='flex flex-row gap-4'>
            <Flag />
            {
              isEvent ?
                'Event'
                : 'Meeting'
            }
          </div>
          <div className='flex flex-row gap-4'>
            <MapPin />
            {
              isEvent ?
                <Badge className="bg-red-800">
                  Event
                </Badge> : <Badge className="bg-blue-800">
                </Badge>
            }

          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}


export const MeetingItemPage = ({ data }: MeetingItemProps) => {
  const { name, location, isEvent, isRequired } = data
  const date = new Date(data.date);
  const [isEditing] = useState<boolean>((false));

  const getTimeFormat = (date: Date): string => {
    // am or pm
    return format(date, 'h:mm a');
  }
  const getDateFormat = (date: Date): string => {
    return format(date, 'MMMM d, yyyy EEEE');
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Card className="w-full max-w-sm mx-auto items-start hover:bg-muted">
          <CardHeader>
            <CardTitle className="overflow-y-clip">
              {name}
            </CardTitle>
            <CardDescription>
              {getDateFormat(date)} - {getTimeFormat(date)}
            </CardDescription>

          </CardHeader>

        </Card>
      </SheetTrigger>
      <SheetContent >
        <SheetHeader className='text-xl font-semibold items-center align-middle justify-between flex flex-row'>
          {

            isEditing ?
              <input
                type="text"
                value={name ?? ''}
                onChange={(e) => console.log(e.target.value)}
                className='w-full'
              />
              : name
          }
        </SheetHeader>
        <div className='flex flex-col py-4 gap-4'>
          <div className='flex flex-row gap-4'>
            <CalendarIcon />
            {getDateFormat(date)}
          </div>

          <div className='flex flex-row gap-4'>
            <ClockIcon />
            {getTimeFormat(date)}
          </div>


          <div className='flex flex-row gap-4'>
            <Flag />
            {
              isEvent ?
                'Event'
                : 'Meeting'
            }
          </div>

          <div className='flex flex-row gap-4'>
            <MapPin />
            {
              location
            }

          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

