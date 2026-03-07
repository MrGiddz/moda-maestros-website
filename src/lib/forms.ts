import { supabase } from "@/integrations/supabase/client";

type FormType = "contact" | "get-started";

type SubmitFormPayload = {
  formType: FormType;
  fields: Record<string, string>;
};

type FormResponse = {
  success?: boolean;
  error?: string;
};

export const submitForm = async ({ formType, fields }: SubmitFormPayload) => {
  const { data, error } = await supabase.functions.invoke<FormResponse>("send-form-email", {
    body: {
      formType,
      fields,
    },
  });

  if (error) {
    throw new Error(error.message || "Failed to submit form");
  }

  if (!data?.success) {
    throw new Error(data?.error || "Failed to submit form");
  }

  return data;
};
