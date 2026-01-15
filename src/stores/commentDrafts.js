import { defineStore } from 'pinia'

export const useCommentDraftStore = defineStore('commentDrafts', {
    state: () => {
        return {
            drafts: JSON.parse(localStorage.getItem('commentDrafts')) || {}
        }
    },
    actions: {
        updateDraft(articleId, draftData) {
            this.drafts[articleId] = { ...draftData };
            this.saveToLocalStorage();
        },
        getDraft(articleId) {
            return this.drafts[articleId] || { username: '', content: '' };
        },
        clearDraft(articleId) {
            delete this.drafts[articleId];
            this.saveToLocalStorage();
        },
        saveToLocalStorage() {
            localStorage.setItem('commentDrafts', JSON.stringify(this.drafts));
        }
    }
})