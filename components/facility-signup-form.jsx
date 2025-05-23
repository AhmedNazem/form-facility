"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { facilityFormSchema } from "@/lib/schema";
import { fetchFormData, submitFormData } from "@/lib/api";
import BasicInfoForm from "@/components/form-sections/basic-info-form";
import LocationForm from "@/components/form-sections/location-form";
import OperationalDetailsForm from "@/components/form-sections/operational-details-form";
import CapacityForm from "@/components/form-sections/capacity-form";
import SocialMediaForm from "@/components/form-sections/social-media-form";
import AdvantagesForm from "@/components/form-sections/advantages-form";
import PaymentForm from "@/components/form-sections/payment-form";
import LanguageSwitcher from "@/components/language-switcher";

export default function FacilitySignupForm() {
  const [formOptions, setFormOptions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [language, setLanguage] = useState("en");
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(facilityFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      have_special_discount_to_companies: false,
      competitive_advantages: [],
      client_types: [],
      extra_services: [],
      language_supports: [],
      cultural_shows: [],
      payment_categories: [],
      accepted_payments: [],
      category: undefined,
      location: {
        country: "",
        city: "",
        district: "",
        street: "",
        google_map_url: "",
        nearest_landmark: "",
        longitude: 0,
        latitude: 0,
      },
      operational_details: {
        is_always_open: true,
        reservation_types: [],
        working_hour: [
          {
            day_of_week: 0,
            start_time: "09:00",
            end_time: "17:00",
          },
        ],
        seasonal_working_hour_change: "",
        cancellation_policy: "",
      },
      capacity_and_capabilities: {
        number_of_rooms: 0,
        number_of_seats: 0,
        number_of_guests: 0,
        room_options: [],
        room_equipments: [],
      },
      social_media_accounts: {
        website: "",
        facebook: "",
        instagram: "",
        youtube: "",
        tiktok: "",
        snapchat: "",
      },
      online_fingerprints: [
        {
          name: "",
          description: "",
          url: "",
        },
      ],
      video: "",
    },
  });

  useEffect(() => {
    const loadFormData = async () => {
      try {
        const data = await fetchFormData();
        setFormOptions(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch form data:", error);
        toast({
          title: "Error",
          description: "Failed to load form data. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    loadFormData();
  }, [toast]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await submitFormData(data);
      toast({
        title: "Success",
        description: "Your facility has been registered successfully!",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading form data...</span>
      </div>
    );
  }

  return (
    <div className={language === "ar" ? "rtl" : "ltr"}>
      {/* Language Switcher */}
      <div className="relative mb-4">
        <div className={language === "ar" ? "ltr" : "rtl"}>
          <LanguageSwitcher
            language={language}
            onLanguageChange={(lang) => setLanguage(lang)}
            className="flex items-center gap-2 absolute right-0 md:relative md:right-auto"
          />
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Tabs */}
          <Tabs defaultValue="basic" className="w-full">
            {/* Updated Tabs List with mobile improvements */}
            <TabsList
              className="flex overflow-x-auto touch-pan-x whitespace-nowrap w-full p-1 md:p-2 gap-1 md:gap-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300  pr-2 md:px-0 pl-20"
              dir="ltr" // Force left-to-right direction for consistent scrolling
            >
              <TabsTrigger
                value="basic"
                className="px-3 py-1  md:px-4 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Basic Info" : "معلومات أساسية"}
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className="px-3 py-1 md:px-4 pl-10 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Location" : "الموقع"}
              </TabsTrigger>
              <TabsTrigger
                value="operational"
                className="px-3 py-1 md:px-4 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Operations" : "العمليات"}
              </TabsTrigger>
              <TabsTrigger
                value="capacity"
                className="px-3 py-1 md:px-4 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Capacity" : "السعة"}
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="px-3 py-1 md:px-4 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Social Media" : "وسائل التواصل"}
              </TabsTrigger>
              <TabsTrigger
                value="advantages"
                className="px-3 py-1 md:px-4 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Advantages" : "المزايا"}
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="px-3 py-1 md:px-4 md:py-2 flex-shrink-0 text-sm md:text-base"
              >
                {language === "en" ? "Payment" : "الدفع"}
              </TabsTrigger>
            </TabsList>

            {/* Tabs Content (No changes needed here) */}
            <TabsContent value="basic" className="mt-4 md:mt-6">
              <BasicInfoForm
                form={form}
                language={language}
                formOptions={formOptions}
              />
            </TabsContent>
            <TabsContent value="location" className="mt-4 md:mt-6">
              <LocationForm form={form} language={language} />
            </TabsContent>
            <TabsContent value="operational" className="mt-4 md:mt-6">
              <OperationalDetailsForm
                form={form}
                language={language}
                formOptions={formOptions}
              />
            </TabsContent>
            <TabsContent value="capacity" className="mt-4 md:mt-6">
              <CapacityForm
                form={form}
                language={language}
                formOptions={formOptions}
              />
            </TabsContent>
            <TabsContent value="social" className="mt-4 md:mt-6">
              <SocialMediaForm form={form} language={language} />
            </TabsContent>
            <TabsContent value="advantages" className="mt-4 md:mt-6">
              <AdvantagesForm
                form={form}
                language={language}
                formOptions={formOptions}
              />
            </TabsContent>
            <TabsContent value="payment" className="mt-4 md:mt-6">
              <PaymentForm
                form={form}
                language={language}
                formOptions={formOptions}
              />
            </TabsContent>
          </Tabs>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto text-white bg-blue-500 p-4"
            >
              {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {language === "en" ? "Submit Registration" : "تقديم التسجيل"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
