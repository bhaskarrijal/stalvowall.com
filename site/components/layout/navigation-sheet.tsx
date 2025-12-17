"use client"

import * as React from "react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

interface NavigationSheetContentProps {
    title: string
    description?: string
    children: React.ReactNode
    contentKey: string
}

export function NavigationSheetContent({
    title,
    description,
    children,
    contentKey,
}: NavigationSheetContentProps) {
    const [displayContent, setDisplayContent] = React.useState(children)
    const [isVisible, setIsVisible] = React.useState(true)
    const prevKeyRef = React.useRef(contentKey)

    React.useEffect(() => {
        if (prevKeyRef.current !== contentKey) {
            setIsVisible(false)
            const timer = setTimeout(() => {
                setDisplayContent(children)
                setIsVisible(true)
                prevKeyRef.current = contentKey
            }, 200) // Transition duration
            return () => clearTimeout(timer)
        } else {
            setDisplayContent(children)
        }
    }, [contentKey, children])

    return (
        <SheetContent side="right" className="bg-[#F6F5F5]">
            <SheetHeader className="space-y-0 pb-0">
                <SheetTitle className="text-xl font-semibold">{title}</SheetTitle>
                {description && (
                    <SheetDescription>{description}</SheetDescription>
                )}
            </SheetHeader>
            <Separator className="mt-2 w-full bg-muted-foreground/10" />
            <div 
                className={`mt-6 space-y-2 px-4 transition-opacity duration-300 ease-in-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {displayContent}
            </div>
        </SheetContent>
    )
}

interface NavigationSheetProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    title: string
    description?: string
    children: React.ReactNode
    contentKey: string
}

export function NavigationSheet({
    open,
    onOpenChange,
    title,
    description,
    children,
    contentKey,
}: NavigationSheetProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <NavigationSheetContent
                title={title}
                description={description}
                contentKey={contentKey}
            >
                {children}
            </NavigationSheetContent>
        </Sheet>
    )
}
