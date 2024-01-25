import { createBehavior } from "@duang/core";
import { AllLocales } from "../../locales";
import { AllSchemas } from "../../schemas";
import { createFieldSchema, createVoidFieldSchema } from "../Field";

type Name = keyof typeof AllLocales | keyof typeof AllSchemas | (string & {});
export const createArrayBehavior = (name: Name) => {
  return createBehavior(
    {
      name,
      extends: ["Field"],
      selector: (node) => node.props?.["x-component"] === name,
      designerProps: {
        droppable: true,
        propsSchema: createFieldSchema((AllSchemas as any)[name]),
      },
      designerLocales: (AllLocales as any)[name],
    },
    {
      name: `${name}.Addition`,
      extends: ["Field"],
      selector: (node) => node.props?.["x-component"] === `${name}.Addition`,
      designerProps: {
        allowDrop(parent) {
          return parent.props?.["x-component"] === name;
        },
        propsSchema: createVoidFieldSchema((AllSchemas as any)[name].Addition),
      },
      designerLocales: AllLocales.ArrayAddition,
    },
    {
      name: `${name}.Remove`,
      extends: ["Field"],
      selector: (node) => node.props?.["x-component"] === `${name}.Remove`,
      designerProps: {
        allowDrop(parent) {
          return parent.props?.["x-component"] === name;
        },
        propsSchema: createVoidFieldSchema(),
      },
      designerLocales: AllLocales.ArrayRemove,
    },
    {
      name: `${name}.Index`,
      extends: ["Field"],
      selector: (node) => node.props?.["x-component"] === `${name}.Index`,
      designerProps: {
        allowDrop(parent) {
          return parent.props?.["x-component"] === name;
        },
        propsSchema: createVoidFieldSchema(),
      },
      designerLocales: AllLocales.ArrayIndex,
    },
    {
      name: `${name}.MoveUp`,
      extends: ["Field"],
      selector: (node) => node.props?.["x-component"] === `${name}.MoveUp`,
      designerProps: {
        allowDrop(parent) {
          return parent.props?.["x-component"] === name;
        },
        propsSchema: createVoidFieldSchema(),
      },
      designerLocales: AllLocales.ArrayMoveUp,
    },
    {
      name: `${name}.MoveDown`,
      extends: ["Field"],
      selector: (node) => node.props?.["x-component"] === `${name}.MoveDown`,
      designerProps: {
        allowDrop(parent) {
          return parent.props?.["x-component"] === "ArrayCards";
        },
        propsSchema: createVoidFieldSchema(),
      },
      designerLocales: AllLocales.ArrayMoveDown,
    },
  );
};
