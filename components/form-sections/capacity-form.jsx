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
import { Checkbox } from "@/components/ui/checkbox";

export default function CapacityForm({ form, language, formOptions }) {
  const translations = {
    title: language === "en" ? "Capacity & Capabilities" : "السعة والقدرات",
    rooms: language === "en" ? "Number of Rooms" : "عدد الغرف",
    roomsDesc:
      language === "en"
        ? "Total number of rooms in your facility"
        : "إجمالي عدد الغرف في منشأتك",
    seats: language === "en" ? "Number of Seats" : "عدد المقاعد",
    seatsDesc:
      language === "en" ? "Total seating capacity" : "إجمالي سعة المقاعد",
    guests: language === "en" ? "Number of Guests" : "عدد الضيوف",
    guestsDesc:
      language === "en"
        ? "Maximum number of guests you can accommodate"
        : "الحد الأقصى لعدد الضيوف الذين يمكنك استيعابهم",
    roomOptions: language === "en" ? "Room Options" : "خيارات الغرف",
    roomOptionsDesc:
      language === "en"
        ? "Select all available room options"
        : "حدد جميع خيارات الغرف المتاحة",
    roomEquipments: language === "en" ? "" : "معدات الغرف",
    roomEquipmentsDesc:
      language === "en"
        ? "Select all available equipment in your rooms"
        : "حدد جميع المعدات المتاحة في غرفك",
  };

  return (
    <Card>
      <CardContent className="pt-6">
        {/* Title */}
        <h3 className="text-lg font-medium mb-4">{translations.title}</h3>

        {/* Number Inputs (Rooms, Seats, Guests) */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Number of Rooms */}
          <FormField
            control={form.control}
            name="capacity_and_capabilities.number_of_rooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.rooms}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number.parseInt(e.target.value))
                    }
                    value={field.value || 0}
                  />
                </FormControl>
                <FormDescription>{translations.roomsDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number of Seats */}
          <FormField
            control={form.control}
            name="capacity_and_capabilities.number_of_seats"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.seats}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number.parseInt(e.target.value))
                    }
                    value={field.value || 0}
                  />
                </FormControl>
                <FormDescription>{translations.seatsDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Number of Guests */}
          <FormField
            control={form.control}
            name="capacity_and_capabilities.number_of_guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{translations.guests}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    {...field}
                    onChange={(e) =>
                      field.onChange(Number.parseInt(e.target.value))
                    }
                    value={field.value || 0}
                  />
                </FormControl>
                <FormDescription>{translations.guestsDesc}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Room Options and Room Equipments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Room Options */}
          <FormField
            control={form.control}
            name="capacity_and_capabilities.room_options"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.roomOptions}</FormLabel>
                  <FormDescription>
                    {translations.roomOptionsDesc}
                  </FormDescription>
                </div>
                <div className="flex flex-col gap-3">
                  {formOptions?.room_options?.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="capacity_and_capabilities.room_options"
                      render={({ field }) => (
                        <FormItem
                          className={`flex items-center w-full space-x-3 ${
                            language === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <FormControl>
                            <Checkbox
                              className="h-5 w-5 rounded-md border-2 data-[state=checked]:bg-primary"
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                const current = field.value || [];
                                const updated = checked
                                  ? [...current, option.id]
                                  : current.filter(
                                      (value) => value !== option.id
                                    );
                                field.onChange(updated);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal flex-1">
                            <div className="flex flex-col">
                              <span>{option.name}</span>
                              {option.description && (
                                <span className="text-muted-foreground text-sm mt-0.5">
                                  {option.description}
                                </span>
                              )}
                            </div>
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Room Equipments */}
          <FormField
            control={form.control}
            name="capacity_and_capabilities.room_equipments"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{translations.roomEquipments}</FormLabel>
                  <FormDescription>
                    {translations.roomEquipmentsDesc}
                  </FormDescription>
                </div>
                <div className="flex flex-col gap-3">
                  {formOptions?.room_equipments?.map((equipment) => (
                    <FormField
                      key={equipment.id}
                      control={form.control}
                      name="capacity_and_capabilities.room_equipments"
                      render={({ field }) => (
                        <FormItem
                          className={`flex items-center w-full space-x-3 ${
                            language === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <FormControl>
                            <Checkbox
                              className="h-5 w-5 rounded-md border-2 data-[state=checked]:bg-primary"
                              checked={field.value?.includes(equipment.id)}
                              onCheckedChange={(checked) => {
                                const current = field.value || [];
                                const updated = checked
                                  ? [...current, equipment.id]
                                  : current.filter(
                                      (value) => value !== equipment.id
                                    );
                                field.onChange(updated);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal flex-1">
                            <div className="flex flex-col">
                              <span>
                                {language === "en"
                                  ? equipment.name
                                  : equipment.name}
                              </span>
                              {equipment.description && (
                                <span className="text-muted-foreground text-sm mt-0.5">
                                  {language === "en"
                                    ? equipment.description
                                    : equipment.description_ar}
                                </span>
                              )}
                            </div>
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
