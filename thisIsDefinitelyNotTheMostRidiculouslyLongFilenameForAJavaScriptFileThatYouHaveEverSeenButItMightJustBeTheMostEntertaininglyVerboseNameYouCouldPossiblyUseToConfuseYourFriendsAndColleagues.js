new Vue({
    el: '.container',
    data: {
        nameInput: '',
        groupCount: 1,
        groups: []
    },
    methods: {
        generateGroups() {
            const names = this.nameInput.split(',').map(name => name.trim()).filter(name => name);
            this.groups = Array.from({ length: this.groupCount }, () => []);

            // Shuffle names
            for (let i = names.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [names[i], names[j]] = [names[j], names[i]];
            }

            // Distribute names into groups
            names.forEach((name, index) => {
                this.groups[index % this.groupCount].push(name);
            });
        }
    }
});