<script setup lang="ts">
const { t } = useI18n()
const accountStore = useConnectAccountStore()
const config = useRuntimeConfig().public
const { isAuthenticated } = useKeycloak()
const route = useRoute()

// Create a computed property to determine if we should show staff text
const showStaffText = computed(() => {
  return accountStore.isStaffOrSbcStaff &&
         (!route.params.orgId || route.params.orgId === accountStore.currentAccount.id.toString())
})

useHead({
  title: showStaffText.value ? t('page.home.titleStaff') : t('page.home.title')
})

setBreadcrumbs([
  {
    to: `${config.registryHomeURL}dashboard?accountid=${accountStore.currentAccount.id}`,
    label: showStaffText.value ? t('labels.bcRegStaffDashboard') : t('labels.bcRegDashboard')
  },
  { label: showStaffText.value ? t('page.home.h1Staff') : t('page.home.h1') }
])

onMounted(() => {
  // Redirect unauthenticated users to login page with current URL as redirect target
  if (!isAuthenticated.value) {
    const registryHomeURL = useRuntimeConfig().public.registryHomeURL
    const redirectUrl = encodeURIComponent(window.location.href)
    window.location.href = `${registryHomeURL}/login/?return=${redirectUrl}`
  }
})
</script>
<template>
  <div class="mx-auto flex flex-col gap-4 px-2 py-8 sm:px-4 sm:py-10">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-4 md:flex-row md:justify-between">
        <div class="flex flex-col gap-4 md:flex-1">
          <h1 class="text-[32px]">
            {{ showStaffText ? t('page.home.h1Staff') : t('page.home.h1') }}
          </h1>

          <p class="text-gray-700">
            {{ $t('page.home.intro') }}
          </p>
        </div>
        <ClientOnly>
          <div v-if="accountStore.currentAccount.id" class="flex-none">
            <UTooltip
              :text="$t('btn.busGetStarted.tooltip')"
              :popper="{ arrow: true }"
            >
              <UButton
                :label="$t('btn.busGetStarted.label')"
                variant="outline"
                icon="i-mdi-domain"
                size="bcGov"
                class="w-full"
                :to="`${config.nrURL}${(accountStore.isStaffOrSbcStaff && route.params.orgId)
                  ? route.params.orgId
                  : accountStore.currentAccount.id.toString()}`"
              />
            </UTooltip>
          </div>
        </ClientOnly>
      </div>
      <HelpTextSection />
    </div>

    <slot /> <!-- This is where the page content will be injected -->
    <UModals />
    <UNotifications />
  </div>
</template>
