import { defineFormKitConfig } from "@formkit/vue";
import {rootClasses} from "@/formkit.theme"
import {fr} from "@formkit/i18n";

export default defineFormKitConfig({
    locales: {fr},
    locale: 'fr',
    config: {rootClasses}
})