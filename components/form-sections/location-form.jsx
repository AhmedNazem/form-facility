"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function LocationForm({ form, language }) {
  const translations = {
    title: language === "en" ? "Location Information" : "معلومات الموقع",
    country: language === "en" ? "Country" : "الدولة",
    city: language === "en" ? "City" : "المدينة",
    district: language === "en" ? "District" : "الحي",
    street: language === "en" ? "Street" : "الشارع",
    mapUrl: language === "en" ? "Google Maps URL" : "رابط خرائط جوجل",
    mapUrlDesc:
      language === "en"
        ? "Share your Google Maps location link"
        : "شارك رابط موقعك على خرائط جوجل",
    landmark: language === "en" ? "Nearest Landmark" : "أقرب معلم",
    landmarkDesc:
      language === "en"
        ? "Mention a well-known place near your facility"
        : "اذكر مكانًا معروفًا بالقرب من منشأتك",
    coordinates: language === "en" ? "Coordinates" : "الإحداثيات",
    longitude: language === "en" ? "Longitude" : "خط الطول",
    latitude: language === "en" ? "Latitude" : "خط العرض",
  };

  return (
    <Card>
      <CardContent className="pt-6">
        {/* Title */}
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>

        {/* Form Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Country */}
          <FormField
            control={form.control}
            name="location.country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.country}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      language === "en" ? "Enter country" : "أدخل الدولة"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* City */}
          <FormField
            control={form.control}
            name="location.city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.city}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      language === "en" ? "Enter city" : "أدخل المدينة"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* District */}
          <FormField
            control={form.control}
            name="location.district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.district}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      language === "en" ? "Enter district" : "أدخل الحي"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Street */}
          <FormField
            control={form.control}
            name="location.street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.street}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      language === "en" ? "Enter street" : "أدخل الشارع"
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Google Map URL */}
          <FormField
            control={form.control}
            name="location.google_map_url"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>{translations.mapUrl}</FormLabel>
                <FormControl>
                  <Input placeholder="https://maps.google.com/..." {...field} />
                </FormControl>
                <FormDescription>{translations.mapUrlDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nearest Landmark */}
          <FormField
            control={form.control}
            name="location.nearest_landmark"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>{translations.landmark}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={
                      language === "en"
                        ? "Enter nearest landmark"
                        : "أدخل أقرب معلم"
                    }
                    {...field}
                  />
                </FormControl>
                <FormDescription>{translations.landmarkDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Coordinates Section */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-medium mb-2">
              {translations.coordinates}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Longitude */}
              <FormField
                control={form.control}
                name="location.longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.longitude}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.000001"
                        placeholder="0.000000"
                        {...field}
                        onChange={(e) =>
                          field.onChange(Number.parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Latitude */}
              <FormField
                control={form.control}
                name="location.latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.latitude}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.000001"
                        placeholder="0.000000"
                        {...field}
                        onChange={(e) =>
                          field.onChange(Number.parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
