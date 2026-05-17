// Nachie's Space — Shared Tailwind Configuration
// Loaded after Tailwind CDN — sets tailwind.config on the CDN object.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary":                   "#c4783c",
                "on-primary":                "#1a0800",
                "primary-container":         "#7a4020",
                "on-primary-container":      "#ffd8b0",
                "primary-fixed":             "#ffd8b0",
                "primary-fixed-dim":         "#c4783c",
                "on-primary-fixed":          "#1a0800",
                "on-primary-fixed-variant":  "#5e3010",
                "inverse-primary":           "#5e3010",

                "secondary":                 "#c49668",
                "on-secondary":              "#1a0c00",
                "secondary-container":       "#7a5828",
                "on-secondary-container":    "#ffddb0",
                "secondary-fixed":           "#ffddb0",
                "secondary-fixed-dim":       "#c49668",
                "on-secondary-fixed":        "#1a0c00",
                "on-secondary-fixed-variant":"#5e3c10",

                "tertiary":                  "#b0aeb0",
                "on-tertiary":               "#ffffff",
                "tertiary-container":        "#3a383a",
                "on-tertiary-container":     "#d0cdd0",
                "tertiary-fixed":            "#d0cdd0",
                "tertiary-fixed-dim":        "#b0aeb0",
                "on-tertiary-fixed":         "#141214",
                "on-tertiary-fixed-variant": "#3a383a",

                "surface":                   "#121212",
                "surface-dim":               "#0c0c0c",
                "surface-bright":            "#282428",
                "surface-container-lowest":  "#080808",
                "surface-container-low":     "#151315",
                "surface-container":         "#1a181a",
                "surface-container-high":    "#222022",
                "surface-container-highest": "#2c2a2c",
                "surface-variant":           "#241e22",
                "surface-tint":              "#c4783c",
                "on-surface":                "#ede8e4",
                "on-surface-variant":        "#8c7e78",
                "inverse-surface":           "#ede8e4",
                "inverse-on-surface":        "#0c0c0c",

                "background":                "#0c0c0c",
                "on-background":             "#ede8e4",

                "outline":                   "#7a6e70",
                "outline-variant":           "#3a2e30",

                "error":                     "#ffb4ab",
                "on-error":                  "#ffffff",
                "error-container":           "#ffdad6",
                "on-error-container":        "#ffdad6"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg:      "0.5rem",
                xl:      "0.75rem",
                full:    "9999px"
            },
            spacing: {
                unit:          "8px",
                gutter:        "32px",
                "margin-edge": "64px",
                margin:        "64px",           // alias used in about / inquiry
                "section-gap": "120px",
                "container-max": "1280px"
            },
            fontFamily: {
                "headline-xl":  ["Playfair Display", "Georgia", "serif"],
                "headline-lg":  ["Playfair Display", "Georgia", "serif"],
                "headline-md":  ["Playfair Display", "Georgia", "serif"],
                "display-xl":   ["Playfair Display", "Georgia", "serif"],
                "body-lg":      ["DM Sans", "system-ui", "sans-serif"],
                "body-md":      ["DM Sans", "system-ui", "sans-serif"],
                "label-sm":     ["DM Sans", "system-ui", "sans-serif"]
            },
            fontSize: {
                "headline-xl": ["4.5rem", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "500" }],
                "headline-lg": ["3rem",   { lineHeight: "1.2",  fontWeight: "500" }],
                "headline-md": ["2rem",   { lineHeight: "1.3",  fontWeight: "400" }],
                "display-xl":  ["4.5rem", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "400" }],
                "body-lg":     ["1.125rem",{ lineHeight: "1.7", fontWeight: "400" }],
                "body-md":     ["1rem",   { lineHeight: "1.6",  fontWeight: "400" }],
                "label-sm":    ["0.75rem",{ lineHeight: "1.2",  letterSpacing: "0.1em",  fontWeight: "600" }]
            }
        }
    }
};
