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
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"

interface NavigationSheetContentProps {
    title: string
    description?: string
    children: React.ReactNode
    contentKey: string
    onClose?: () => void
}

export function NavigationSheetContent({
    title,
    description,
    children,
    contentKey,
    onClose,
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
        <SheetContent 
            side="right" 
            showCloseButton={false}
            className="bg-[#F6F5F5] !w-full !max-w-full !h-[calc(100vh-var(--header-height,80px))] !top-[var(--header-height,80px)] !bottom-0 md:!top-[var(--header-height,80px)] md:!bottom-0 md:!h-[calc(100vh-var(--header-height,80px))] md:!w-4/5 md:!max-w-md"
        >
            {/* Custom Close Button - Same size as mobile menu on mobile */}
            {onClose && (
              <Button
                variant="ghost"
                onClick={onClose}
                className="absolute top-4 right-4 md:top-3 md:right-3 h-10 w-10 md:h-9 md:w-9 p-0"
                aria-label="Close menu"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="!h-6 !w-6 md:!h-5 md:!w-5" strokeWidth={2} />
                <span className="sr-only">Close</span>
              </Button>
            )}
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
                onClose={() => onOpenChange(false)}
            >
                {children}
            </NavigationSheetContent>
        </Sheet>
    )
}
