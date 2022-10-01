// Use this instead of @types/react and @types/react-dom because they conflict with Vue
declare module "react" {
  type ReactElement = any;
}
declare module "react-dom/server";
