
      import CompDefault from '@/components/CompDefault.vue'
import CompDialog from '@/components/CompDialog.vue'
import CompFooter from '@/components/CompFooter.vue'
import CompHeader from '@/components/CompHeader.vue'
import CompLoading from '@/components/CompLoading.vue'
import CompPopup from '@/components/CompPopup.vue'
import CompSkeleton from '@/components/CompSkeleton.vue'
import CompSortIcon from '@/components/CompSortIcon.vue'

      declare module '@vue/runtime-core' {
        export interface GlobalComponents {
          CompDefault: typeof CompDefault
CompDialog: typeof CompDialog
CompFooter: typeof CompFooter
CompHeader: typeof CompHeader
CompLoading: typeof CompLoading
CompPopup: typeof CompPopup
CompSkeleton: typeof CompSkeleton
CompSortIcon: typeof CompSortIcon

        }
      }
      export {}
  