// colors.js

export const COLORS = {
  // Soft slate for primary calls—still muted but visible on dark
  primary:        '#6A7F8F',

  // Warm taupe for secondary elements
  secondary:      '#A69F87',

  // Muted mauve accent
  accent:         '#8F758F',

  // Dark canvas and page
  background:     '#1F1F1F',  // nearly-black base
  pageBackground: '#181818',  // subtle contrast

  // Dark surfaces & cards
  surface:        '#2B2B2B',
  card:           '#2E2E2E',

  // Light text hierarchy for legibility
  mainText:       '#E1E1E1',
  darkText:       '#FFFFFF',
  lightText:      '#A3A3A3',

  // Dividers that are visible but not harsh
  divider:        '#383838',
  lightDivider:   '#4A4A4A',

  // Utility
  white:          '#FFFFFF',
  danger:         '#BA5E5E',   // muted brick-red still pops on dark
};


export default {
  light: {
    text: COLORS.darkText,
    background: COLORS.pageBackground,
    card: COLORS.card,
    surface: COLORS.white,
    divider: COLORS.lightDivider,
    tint: COLORS.primary,
    tabIconDefault: COLORS.lightText,
    tabIconSelected: COLORS.primary,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    accent: COLORS.accent,
    pageBackground: COLORS.pageBackground,
    mainText: COLORS.darkText,
    lightText: COLORS.lightText,
    white: COLORS.white,
    danger: COLORS.danger
  },
  dark: {
    text: COLORS.mainText,
    background: COLORS.background,
    card: COLORS.surface,
    surface: COLORS.surface,
    divider: COLORS.divider,
    tint: COLORS.primary,
    tabIconDefault: COLORS.lightText,
    tabIconSelected: COLORS.primary,
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    accent: COLORS.accent,
    pageBackground: COLORS.background,
    mainText: COLORS.mainText,
    lightText: COLORS.lightText,
    white: COLORS.white,
    danger: COLORS.danger
  },
};
