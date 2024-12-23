import colors from './theme.config.js';

const typo = {
    DEFAULT: {
        css: {
            '*': { margin: '0', padding: '0' },
            color: colors.foreground,
            '[class~="dark"] &': {
                color: colors.dark.foreground,
            },
            a: {
                color: colors.primary.DEFAULT,
                textDecoration: 'none',
                '[class~="dark"] &': { color: colors.dark.primary.DEFAULT },
            },
            h1: {
                color: colors.foreground,
                fontSize: '2.5rem',
                fontWeight: '600',
                '[class~="dark"] &': { color: colors.dark.foreground },
            },
            h2: {
                color: colors.primary.DEFAULT,
                fontSize: '2rem',
                fontWeight: '500',
                '[class~="dark"] &': { color: colors.dark.primary.DEFAULT },
            },
            input: {
                color: colors.foreground,
                fontWeight: '500',
                '[class~="dark"] &': { color: colors.dark.foreground },
            },
            label: {
                color: colors.foreground,
                fontWeight: '500',
                '[class~="dark"] &': { color: colors.dark.foreground },
            },
            strong: {
                color: colors.foreground,
                fontSize: '1.5rem',
                fontWeight: '600',
                '[class~="dark"] &': { color: colors.dark.foreground },
            },
            h3: {
                color: colors.primary.DEFAULT,
                fontSize: '1.75rem',
                fontWeight: '400',
                '[class~="dark"] &': { color: colors.dark.primary.DEFAULT },
            },
            h4: {
                color: colors.primary.DEFAULT,
                fontSize: '1.5rem',
                fontWeight: '400',
                '[class~="dark"] &': { color: colors.dark.primary.DEFAULT },
            },
            p: {
                color: colors.muted.DEFAULT,
                fontSize: '1rem',
                fontWeight: '400',
                '[class~="dark"] &': { color: colors.dark.muted.DEFAULT },
            },
            span: {
                color: colors.muted.foreground,
                fontSize: '1rem',
                fontWeight: '400',
                '[class~="dark"] &': { color: colors.dark.muted.foreground },
            },
            ul: { listStyleType: 'none' },
            ol: { listStyleType: 'none' },
            li: {
                color: colors.muted.DEFAULT,
                fontSize: '1rem',
                '[class~="dark"] &': { color: colors.dark.muted.DEFAULT },
            },
            blockquote: {
                fontStyle: 'italic',
                borderLeft: `4px solid ${colors.primary.DEFAULT}`,
                paddingLeft: '1rem',
                marginLeft: '0',
                color: colors.primary.DEFAULT,
                '[class~="dark"] &': { color: colors.dark.primary.DEFAULT },
            },
            code: {
                color: colors.accent.DEFAULT,
                fontFamily: '"Fira Code", monospace',
                backgroundColor: colors.input,
                padding: '0.2rem 0.4rem',
                borderRadius: '4px',
            },
        },
    },
};

export default typo;
