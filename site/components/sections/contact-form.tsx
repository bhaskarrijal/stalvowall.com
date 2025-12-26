"use client"

import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContactFormProps {
  title: string
  description: string
}

export function ContactForm({ title, description }: ContactFormProps) {
  return (
    <section className="w-full py-16 md:py-26 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">
              {title}
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name*"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name*"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              {/* State and Role Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat"
                  >
                    <option value="">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                    <option value="NT">NT</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    I am
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat"
                  >
                    <option value="">I'm a...*</option>
                    <option value="builder">Builder</option>
                    <option value="installer">Installer</option>
                    <option value="architect">Architect</option>
                    <option value="homeowner">Homeowner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="text-sm text-foreground/70 leading-relaxed">
                We respect your privacy. Any personal information that you provide will be collected used and disclosed for the primary purpose of assisting you with your enquiry. You can view further details on how we manage personal information in our{" "}
                <a href="/privacy-policy" className="text-primary underline hover:no-underline">
                  privacy policy
                </a>
                .
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full h-14 text-base font-medium"
                )}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
