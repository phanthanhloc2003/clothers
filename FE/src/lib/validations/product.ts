import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(2, 'Product name must be at least 2 characters'),
  categoryId: z.string().min(1, 'Please select a category'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().min(0, 'Price must be greater than or equal to 0'),
  salePrice: z.number().min(0, 'Sale price must be greater than or equal to 0').optional(),
  stockQuantity: z.number().min(0, 'Stock must be greater than or equal to 0'),
  brand: z.string().min(1, 'Brand is required'),
});

export const productVariantSchema = z.object({
  size: z.string().min(1, 'Size is required'),
  color: z.string().min(1, 'Color is required'),
  sku: z.string().min(1, 'SKU is required'),
  stockQuantity: z.number().min(0, 'Stock must be greater than or equal to 0'),
  priceAdjustment: z.number().default(0),
});

export const productImageSchema = z.object({
  imageUrl: z.string().url('Must be a valid URL'),
  isPrimary: z.boolean().default(false),
});