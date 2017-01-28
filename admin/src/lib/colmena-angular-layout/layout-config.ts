export type LayoutNavItem = {
  label: string,
  link: string | string[],
  type?: string,
  icon?: string,
}

export type LayoutConfig = {
  footer?: LayoutConfigFooter,
  header?: LayoutConfigHeader,
  main?: LayoutConfigMain,
  sidebar?: LayoutConfigSidebar
}

export type LayoutConfigFooter = {
  left?: string
  right?: string
}

export type LayoutConfigHeader = {
  aside?: boolean,
  nav?: LayoutNavItem[],
}

export type LayoutConfigMain = {
  breadcrumbs?: boolean,
  nav?: LayoutNavItem[] | boolean,
}

export type LayoutConfigSidebar = {
  nav?: LayoutNavItem[],
}
