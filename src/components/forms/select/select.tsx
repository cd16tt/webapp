import type { ValidationError } from '@tanstack/react-form';
import type { ReactNode } from 'react';

import { cx } from 'class-variance-authority';
import {
	Button,
	Collection,
	FieldError,
	Header,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Section,
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
	SelectValue,
	Text,
} from 'react-aria-components';

import { useFieldErrors } from '#hooks/use_field_errors';

export interface SelectOption {
	label: string;
	description?: string | undefined;
	value: string;
	disabled?: boolean | undefined;
}

export type SelectOptions = SelectOption | { header: string; options: Array<SelectOption> };

interface SelectProps extends Omit<AriaSelectProps<SelectOptions>, 'children'> {
	options: Array<SelectOptions>;
	label: ReactNode;
	hiddenLabel?: boolean;
	description?: ReactNode;
	errors?: Array<ValidationError>;
}

export function Select(props: SelectProps) {
	const { label, hiddenLabel = false, description, errors, options, ...rest } = props;
	const fieldErrors = useFieldErrors(errors);

	const displayableOptions = options.filter((child) => {
		if ('header' in child) {
			return child.options.length > 0;
		}

		return true;
	});

	if (displayableOptions.length === 0) {
		return null;
	}

	return (
		<AriaSelect className="flex items-center gap-2" {...rest}>
			<Label className={cx('block text-neutral-9 font-medium leading-6', { 'sr-only': hiddenLabel })}>
				{label}
				{props.isRequired && <span className="text-danger-5">&nbsp;*</span>}
			</Label>
			<div className={cx('rounded-md shadow-sm', { 'mt-1': !hiddenLabel })}>
				<Button
					className={cx(
						'focus:ring-brand-6 flex items-center gap-2 justify-between w-full border-0 bg-transparent rounded-md py-2 pl-3 text-neutral-9 shadow-sm ring-1 ring-neutral-4 ring-inset placeholder:text-neutral-4 hover:bg-neutral-50 focus:ring-2',
						{ 'ring-2 ring-danger-5': props.isInvalid },
					)}
				>
					<SelectValue className="truncate">{({ selectedText }) => selectedText}</SelectValue>
					<i className="i-heroicons:chevron-up-down-16-solid h-5 w-5 shrink-0 text-neutral-4" aria-hidden="true" />
				</Button>
			</div>
			{props.isInvalid && fieldErrors.length > 0 && (
				<FieldError className="mt-1 block text-sm text-danger-5">
					{fieldErrors.map((error, idx) => (
						<span className="block" key={idx}>
							{error}
						</span>
					))}
				</FieldError>
			)}
			{description && (
				<Text slot="description" className="mt-1 block text-sm text-neutral-5">
					{description}
				</Text>
			)}
			<Popover
				offset={4}
				className="max-w-sm min-w-[200px] w-[--trigger-width] overflow-hidden border border-neutral-3 rounded-md border-solid bg-white shadow-md"
			>
				<ListBox className="max-h-inherit overflow-auto">
					{displayableOptions.map((child) => {
						if ('header' in child) {
							return (
								<Section key={child.header}>
									<Header className="bg-neutral-1 py-1 pl-10 pr-3 text-sm font-medium">{child.header}</Header>
									<Collection>
										{child.options.map((option) => (
											<Option key={option.value} {...option} />
										))}
									</Collection>
								</Section>
							);
						}

						return <Option key={child.value} {...child} />;
					})}
				</ListBox>
			</Popover>
		</AriaSelect>
	);
}

function Option(props: SelectOption) {
	return (
		<ListBoxItem
			textValue={props.label}
			id={props.value}
			isDisabled={!!props.disabled}
			className={({ isFocused, isSelected, isDisabled }) =>
				cx('py-2.5 cursor-pointer', {
					'bg-brand-1': isFocused,
					'text-brand-8 px-3': isSelected,
					'pr-3 pl-10': !isSelected,
					'text-neutral-4 cursor-not-allowed': isDisabled,
				})
			}
		>
			{({ isSelected }) => (
				<>
					<div className="flex items-start gap-2">
						{isSelected && <i className="i-heroicons:check-16-solid h-5 w-5 shrink-0" />}
						<Text slot="label" className={cx('leading-tight', { 'font-medium': isSelected })}>
							{props.label}
						</Text>
					</div>
					{props.description && (
						<Text slot="description" className={cx('text-sm text-neutral-5 leading-tight', { 'pl-7': isSelected })}>
							{props.description}
						</Text>
					)}
				</>
			)}
		</ListBoxItem>
	);
}
