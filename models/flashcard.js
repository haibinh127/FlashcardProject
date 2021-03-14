const mongoose = require('mongoose');
const FlashcardSchema = new mongoose.Schema({
    frontside: {
        type: String,
        required: true
    },
    backside: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'other'
    },
    remember: {
        type: Boolean,
        required: true,
        default: false
    }
});

const flashcardModel = mongoose.model('flashcard', FlashcardSchema);

module.exports = flashcardModel;
