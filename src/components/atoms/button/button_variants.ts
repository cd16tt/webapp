import type { ClassValue } from 'class-variance-authority/types';

import { cva, type VariantProps } from 'class-variance-authority';

type Variants = {
	intent: {
		brand: ClassValue;
		neutral: ClassValue;
		success: ClassValue;
		warning: ClassValue;
		danger: ClassValue;
		light: ClassValue;
	};
	variant: {
		solid: ClassValue;
		outline: ClassValue;
		underline: ClassValue;
		ghost: ClassValue;
	};
	iconOnly: {
		true: ClassValue;
		false: ClassValue;
	};
	size: {
		sm: ClassValue;
		md: ClassValue;
		lg: ClassValue;
	};
	fullWidth: {
		true: ClassValue;
	};
	disabled: {
		true: ClassValue;
		false: ClassValue;
	};
	align: {
		start: ClassValue;
		center: ClassValue;
		end: ClassValue;
	};
};

// @unocss-include
export const buttonVariants = cva<Variants>(
	'inline-flex items-center gap-2 focus-visible:(outline outline-2 outline-offset-2) border-none rounded-md font-medium transition-colors',
	{
		variants: {
			align: {
				start: 'justify-start',
				center: 'justify-center text-center',
				end: 'justify-end',
			},
			intent: {
				brand: undefined,
				neutral: undefined,
				success: undefined,
				warning: undefined,
				danger: undefined,
				light: undefined,
			},
			variant: {
				solid: 'no-underline text-white',
				outline: 'no-underline bg-transparent ring-current ring-1.5 ring-inset',
				underline: 'p-0 bg-transparent',
				ghost: 'no-underline bg-transparent',
			},
			iconOnly: {
				true: undefined,
				false: undefined,
			},
			size: {
				sm: undefined,
				md: undefined,
				lg: undefined,
			},
			fullWidth: {
				true: 'w-full',
			},
			disabled: {
				true: 'cursor-not-allowed',
				false: 'cursor-pointer',
			},
		},
		compoundVariants: [
			// Classic button
			{
				iconOnly: false,
				variant: ['solid', 'outline', 'ghost'],
				size: 'sm',
				className: 'px-2.5 py-1.5',
			},
			{
				iconOnly: false,
				variant: ['solid', 'outline', 'ghost'],
				size: 'md',
				className: 'px-3 py-2',
			},
			{
				iconOnly: false,
				variant: ['solid', 'outline', 'ghost'],
				size: 'lg',
				className: 'px-5 py-3',
			},
			{
				iconOnly: false,
				variant: 'underline',
				className: 'underline underline-offset-3 underline-2 decoration-skip-ink',
			},
			// Icon button
			{
				iconOnly: true,
				size: 'sm',
				variant: ['solid', 'outline', 'ghost'],
				className: 'h-8 w-8',
			},
			{
				iconOnly: true,
				size: 'md',
				variant: ['solid', 'outline', 'ghost'],
				className: 'h-10 w-10',
			},
			{
				iconOnly: true,
				size: 'lg',
				variant: ['solid', 'outline', 'ghost'],
				className: 'h-12 w-12',
			},
			{
				iconOnly: true,
				variant: 'underline',
				className: 'rounded-sm',
			},
			// Accessibility outline color
			{
				intent: 'brand',
				className: 'outline-brand-4',
			},
			{
				intent: 'neutral',
				className: 'outline-neutral-4',
			},
			{
				intent: 'success',
				className: 'outline-success-4',
			},
			{
				intent: 'warning',
				className: 'outline-warning-4',
			},
			{
				intent: 'danger',
				className: 'outline-danger-4',
			},
			{
				intent: 'light',
				className: 'outline-neutral-4',
			},
			// Solid colors
			{
				intent: 'brand',
				variant: 'solid',
				disabled: false,
				className: 'bg-brand-6 hover:bg-brand-7',
			},
			{
				intent: 'neutral',
				variant: 'solid',
				disabled: false,
				className: 'bg-neutral-6 hover:bg-neutral-7',
			},
			{
				intent: 'success',
				variant: 'solid',
				disabled: false,
				className: 'bg-success-6 hover:bg-success-7',
			},
			{
				intent: 'warning',
				variant: 'solid',
				disabled: false,
				className: 'bg-warning-6 hover:bg-warning-7',
			},
			{
				intent: 'danger',
				variant: 'solid',
				disabled: false,
				className: 'bg-danger-6 hover:bg-danger-7',
			},
			{
				intent: 'light',
				variant: 'solid',
				disabled: false,
				className: 'text-neutral-6 bg-neutral-1 hover:bg-neutral-2',
			},
			// Outline colors
			{
				intent: 'brand',
				variant: 'outline',
				disabled: false,
				className: 'text-brand-6 hover:(text-brand-7 bg-brand-50)',
			},
			{
				intent: 'neutral',
				variant: 'outline',
				disabled: false,
				className: 'text-neutral-6 hover:(text-neutral-7 bg-neutral-50)',
			},
			{
				intent: 'success',
				variant: 'outline',
				disabled: false,
				className: 'text-success-6 hover:(text-success-7 bg-success-50)',
			},
			{
				intent: 'warning',
				variant: 'outline',
				disabled: false,
				className: 'text-warning-6 hover:(text-warning-7 bg-warning-50)',
			},
			{
				intent: 'danger',
				variant: 'outline',
				disabled: false,
				className: 'text-danger-6 hover:(text-danger-7 bg-danger-50)',
			},
			{
				intent: 'light',
				variant: 'outline',
				disabled: false,
				className: 'text-neutral-5 hover:(text-neutral-6 bg-neutral-50)',
			},
			// Underline colors
			{
				intent: 'brand',
				variant: 'underline',
				disabled: false,
				className: 'text-brand-6 hover:text-brand-7',
			},
			{
				intent: 'neutral',
				variant: 'underline',
				disabled: false,
				className: 'text-neutral-6 hover:text-neutral-7',
			},
			{
				intent: 'success',
				variant: 'underline',
				disabled: false,
				className: 'text-success-6 hover:text-success-7',
			},
			{
				intent: 'warning',
				variant: 'underline',
				disabled: false,
				className: 'text-warning-6 hover:text-warning-7',
			},
			{
				intent: 'danger',
				variant: 'underline',
				disabled: false,
				className: 'text-danger-6 hover:text-danger-7',
			},
			{
				intent: 'light',
				variant: 'underline',
				disabled: false,
				className: 'text-neutral-5 hover:text-neutral-6',
			},
			// Ghost colors
			{
				intent: 'brand',
				variant: 'ghost',
				disabled: false,
				className: 'text-brand-7 hover:(bg-brand-50)',
			},
			{
				intent: 'neutral',
				variant: 'ghost',
				disabled: false,
				className: 'text-neutral-7 hover:(bg-neutral-50)',
			},
			{
				intent: 'success',
				variant: 'ghost',
				disabled: false,
				className: 'text-success-7 hover:(bg-success-50)',
			},
			{
				intent: 'warning',
				variant: 'ghost',
				disabled: false,
				className: 'text-warning-7 hover:(bg-warning-50)',
			},
			{
				intent: 'danger',
				variant: 'ghost',
				disabled: false,
				className: 'text-danger-7 hover:(bg-danger-50)',
			},
			{
				intent: 'light',
				variant: 'ghost',
				disabled: false,
				className: 'text-neutral-5 hover:(bg-neutral-50)',
			},
			// Disabled state
			{
				disabled: true,
				variant: 'solid',
				className: 'text-neutral-3 bg-neutral-1',
			},
			{
				disabled: true,
				variant: 'outline',
				className: 'text-neutral-3',
			},
			{
				disabled: true,
				variant: 'underline',
				className: 'text-neutral-3',
			},
			{
				disabled: true,
				variant: 'ghost',
				className: 'text-neutral-3',
			},
			{
				disabled: true,
				iconOnly: true,
				variant: 'underline',
				className: 'border-b-neutral-3',
			},
		],
	},
);

export type $ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonVariants = Omit<$ButtonVariants, 'iconOnly' | 'disabled'>;
