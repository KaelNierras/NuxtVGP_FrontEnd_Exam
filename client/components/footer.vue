<template>
    <footer class="footer">
        <div class="container">
            <div class="mini-logo">
                <v-icon icon="mdi-creation-outline" class="icon" />
                <span class="text-muted">Space Exploration</span>
            </div>
            <span class="mini-logo">COPYRIGHT @ 2024</span>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    width: 100%;
    height: 100px;
    background-color: black;
    padding: 20px 0;
    text-align: center;
    color: white;
}

.icon {
    font-size: 20px;
}

.mini-logo {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.container {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center; /* This will center items vertically */
}

@media (max-width: 768px) {
	.container {
        flex-direction: column;
        gap: 10px;
    }
}
</style>