/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  LinkHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
export interface IPropsDiv extends HTMLAttributes<HTMLDivElement> {}
export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {}
export interface IPropsLabel extends LabelHTMLAttributes<HTMLLabelElement> {}
export interface IPropsLink extends LinkHTMLAttributes<HTMLLinkElement> {}
export interface IPropsSpan extends HTMLAttributes<HTMLSpanElement> {}
export interface IPropsSvg extends HTMLAttributes<HTMLOrSVGElement> {}
export interface IPropsTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
