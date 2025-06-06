import { z } from "zod";

export const upsertInvoiceTemplateSchema = z.object({
  customer_label: z.string().optional(),
  title: z.string().optional(),
  from_label: z.string().optional(),
  invoice_no_label: z.string().optional(),
  issue_date_label: z.string().optional(),
  due_date_label: z.string().optional(),
  description_label: z.string().optional(),
  price_label: z.string().optional(),
  quantity_label: z.string().optional(),
  total_label: z.string().optional(),
  total_summary_label: z.string().optional(),
  vat_label: z.string().optional(),
  subtotal_label: z.string().optional(),
  tax_label: z.string().optional(),
  discount_label: z.string().optional(),
  timezone: z.string().optional(),
  payment_label: z.string().optional(),
  note_label: z.string().optional(),
  logo_url: z.string().optional().nullable(),
  currency: z.string().optional(),
  payment_details: z.string().optional().nullable(),
  from_details: z.string().optional().nullable(),
  date_format: z.string().optional(),
  include_vat: z.boolean().optional().optional(),
  include_tax: z.boolean().optional().optional(),
  include_discount: z.boolean().optional(),
  include_decimals: z.boolean().optional(),
  include_pdf: z.boolean().optional(),
  include_units: z.boolean().optional(),
  include_qr: z.boolean().optional(),
  tax_rate: z.number().min(0).max(100).optional(),
  vat_rate: z.number().min(0).max(100).optional(),
  size: z.enum(["a4", "letter"]).optional(),
  delivery_type: z.enum(["create", "create_and_send"]).optional(),
  locale: z.string().optional(),
});

export const draftLineItemSchema = z.object({
  name: z.string().optional(),
  quantity: z.number().min(0, "Quantity must be at least 0").optional(),
  unit: z.string().optional().nullable(),
  price: z.number().safe().optional(),
  vat: z.number().min(0, "VAT must be at least 0").optional(),
  tax: z.number().min(0, "Tax must be at least 0").optional(),
});

export const draftInvoiceSchema = z.object({
  id: z.string().uuid(),
  template: upsertInvoiceTemplateSchema,
  from_details: z.string().nullable().optional(),
  customer_details: z.string().nullable().optional(),
  customer_id: z.string().uuid().nullable().optional(),
  customer_name: z.string().nullable().optional(),
  payment_details: z.string().nullable().optional(),
  note_details: z.string().nullable().optional(),
  due_date: z.string(),
  issue_date: z.string(),
  invoice_number: z.string(),
  logo_url: z.string().optional().nullable(),
  vat: z.number().nullable().optional(),
  tax: z.number().nullable().optional(),
  discount: z.number().nullable().optional(),
  subtotal: z.number().nullable().optional(),
  top_block: z.any().nullable().optional(),
  bottom_block: z.any().nullable().optional(),
  amount: z.number().nullable().optional(),
  line_items: z.array(draftLineItemSchema).optional(),
  token: z.string().optional(),
});

export const lineItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  quantity: z.number().min(0, "Quantity must be at least 0"),
  unit: z.string().optional(),
  price: z.number(),
  vat: z.number().min(0, "VAT must be at least 0").optional(),
  tax: z.number().min(0, "Tax must be at least 0").optional(),
});

export const invoiceTemplateSchema = z.object({
  title: z.string().optional(),
  customer_label: z.string(),
  from_label: z.string(),
  invoice_no_label: z.string(),
  issue_date_label: z.string(),
  due_date_label: z.string(),
  description_label: z.string(),
  price_label: z.string(),
  quantity_label: z.string(),
  total_label: z.string(),
  total_summary_label: z.string().optional(),
  vat_label: z.string().optional(),
  subtotal_label: z.string().optional(),
  tax_label: z.string().optional(),
  discount_label: z.string().optional(),
  payment_label: z.string(),
  note_label: z.string(),
  logo_url: z.string().optional().nullable(),
  currency: z.string(),
  payment_details: z.any().nullable().optional(),
  from_details: z.any().nullable().optional(),
  size: z.enum(["a4", "letter"]),
  include_vat: z.boolean().optional(),
  include_tax: z.boolean().optional(),
  include_discount: z.boolean().optional(),
  include_decimals: z.boolean().optional(),
  include_pdf: z.boolean().optional(),
  include_units: z.boolean().optional(),
  include_qr: z.boolean().optional(),
  tax_rate: z.number().min(0).max(100).optional(),
  vat_rate: z.number().min(0).max(100).optional(),
  date_format: z.enum(["dd/MM/yyyy", "MM/dd/yyyy", "yyyy-MM-dd", "dd.MM.yyyy"]),
  delivery_type: z.enum(["create", "create_and_send"]),
  locale: z.string().optional(),
  timezone: z.string().optional(),
});
