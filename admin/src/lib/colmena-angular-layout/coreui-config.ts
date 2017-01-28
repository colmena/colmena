export type CoreUINavItem = {
  label: string,
  link: string | string[],
  type?: string,
  icon?: string,
}

export type CoreUIConfig = {
  footer?: CoreUIConfigFooter,
  header?: CoreUIConfigHeader,
  main?: CoreUIConfigMain,
  sidebar?: CoreUIConfigSidebar
}

export type CoreUIConfigFooter = {
  left?: string
  right?: string
}

export type CoreUIConfigHeader = {
  aside?: boolean,
  nav?: CoreUINavItem[],
}

export type CoreUIConfigMain = {
  breadcrumbs?: boolean,
  nav?: CoreUINavItem[] | boolean,
}

export type CoreUIConfigSidebar = {
  nav?: CoreUINavItem[],
}
