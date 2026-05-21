<script setup>
import { reactive, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

// --- CONFIGURATION ---
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQPG7SqKCME-siL3xkDqOwCJ1WHOGuZCQZnZO0-7GgYACxeb6lNT1mjpvkJXrG0QxbqQ/exec'
const PRODUCT_NAME = 'FluentBooking-user-docs'
// ---------------------

const { page } = useData()
const route = useRoute()

const state = reactive({
  voted: false,
  voting: false,
  showForm: false,
  message: '',
})

watch(() => route.path, () => {
  state.voted = false
  state.voting = false
  state.showForm = false
  state.message = ''
})

const sendToSheet = async (payload) => {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  })
}

const submitFeedback = async (vote) => {
  state.voting = true

  try {
    await sendToSheet({
      product: PRODUCT_NAME,
      path: route.path,
      title: page.value.title,
      vote,
    })
    state.voted = true
    state.showForm = false
  } catch (e) {
    console.error('Feedback Error:', e)
  } finally {
    state.voting = false
  }
}

const submitComment = async () => {
  const message = state.message.trim()
  if (!message) return

  state.voting = true

  try {
    await sendToSheet({
      product: PRODUCT_NAME,
      path: route.path,
      title: page.value.title,
      vote: 'comment',
      message,
    })
    state.voted = true
    state.showForm = false
    state.message = ''
  } catch (e) {
    console.error('Feedback Error:', e)
  } finally {
    state.voting = false
  }
}

const openForm = () => {
  state.showForm = true
}

const closeForm = () => {
  state.showForm = false
  state.message = ''
}
</script>

<template>
  <div class="feedback-wrapper">
    <div v-if="!state.voted" class="feedback-card">
      <p class="feedback-heading">Was this page helpful?</p>

      <div class="feedback-buttons">
        <button
          type="button"
          class="feedback-btn"
          :disabled="state.voting"
          @click="submitFeedback('yes')"
        >
          <span class="feedback-btn-icon" aria-hidden="true">👍</span>
          <span>Yes</span>
        </button>
        <button
          type="button"
          class="feedback-btn"
          :disabled="state.voting"
          @click="submitFeedback('no')"
        >
          <span class="feedback-btn-icon" aria-hidden="true">👎</span>
          <span>No</span>
        </button>
        <button
          v-if="!state.showForm"
          type="button"
          class="feedback-btn"
          :disabled="state.voting"
          @click="openForm"
        >
          <span class="feedback-btn-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span>Feedback</span>
        </button>
        <button
          v-else
          type="button"
          class="feedback-btn"
          :disabled="state.voting"
          @click="closeForm"
        >
          <span class="feedback-btn-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </span>
          <span>Close</span>
        </button>
      </div>

      <div v-if="state.showForm" class="feedback-form">
        <textarea
          v-model="state.message"
          class="feedback-textarea"
          rows="4"
          placeholder="How can we improve this specific page?"
          :disabled="state.voting"
        />
        <button
          type="button"
          class="feedback-submit"
          :disabled="state.voting || !state.message.trim()"
          @click="submitComment"
        >
          Send Feedback
        </button>
      </div>
    </div>

    <div v-else class="feedback-card feedback-thanks">
      <p>Thanks for your feedback!</p>
    </div>
  </div>
</template>

<style scoped>
.feedback-wrapper {
  margin: 2rem 0 1.5rem;
}

.feedback-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem 1.25rem;
  text-align: center;
}

.feedback-heading {
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.feedback-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.feedback-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.feedback-btn:hover:not(:disabled) {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-text-3);
}

.feedback-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.feedback-btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.feedback-form {
  margin-top: 1rem;
  text-align: center;
}

.feedback-textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 6rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-family: inherit;
  font-size: 0.875rem;
  line-height: 1.5;
  resize: vertical;
  box-sizing: border-box;
}

.feedback-textarea::placeholder {
  color: var(--vp-c-text-3);
}

.feedback-textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.feedback-textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.feedback-submit {
  margin-top: 0.75rem;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.feedback-submit:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}

.feedback-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.feedback-thanks p {
  margin: 0;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>
