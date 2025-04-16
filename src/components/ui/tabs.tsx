// components/ui/tabs.tsx
"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root
const TabsList = TabsPrimitive.List
const TabsTrigger = TabsPrimitive.Trigger
const TabsContent = TabsPrimitive.Content

export { Tabs, TabsList, TabsTrigger, TabsContent }
