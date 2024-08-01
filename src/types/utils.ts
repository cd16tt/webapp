import type { initContract } from '@ts-rest/core';
import type { ReactNode } from 'react';

export type Component = ReactNode;

export type ContractInstance = ReturnType<typeof initContract>;

export type ValueOf<ObjectType, ValueType extends keyof ObjectType = keyof ObjectType> = ObjectType[ValueType];

export type Uid = string;
