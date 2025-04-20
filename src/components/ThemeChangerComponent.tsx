import {useTheme} from "../hooks";


interface ThemeData {
    theme: "light-high-contrast" | 'light' | 'dark' | 'dark-high-contrast' | 'dark-medium-contrast' | 'light-medium-contrast',
    name: string
}
export function ThemeChangerComponent() {
    const {theme, setTheme} = useTheme();
    const themeData:ThemeData[] = [
        {theme: 'light',name: 'Light'},
        {theme: 'light-medium-contrast',name: 'Light Medium Contrast'},
        {theme: "light-high-contrast",name: 'Light High Contrast'},
        {theme: 'dark',name: 'Dark'},
        {theme: 'dark-medium-contrast',name: 'Dark Medium Contrast'},
        {theme: 'dark-high-contrast',name: 'Dark High Contrast'},
    ]
    return (

        <div>
            {
                themeData.map((t) => <button key={t.theme} onClick={() => setTheme(t.theme)}
                style={{padding: '10px', margin: '10px',borderRadius: '10px', backgroundColor: t.theme === theme ? 'black' : 'var(--md-sys-color-primary-container)', color: t.theme === theme ? 'white' : 'black'}}
                >{t.name}</button>)
            }
        </div>

    );
}