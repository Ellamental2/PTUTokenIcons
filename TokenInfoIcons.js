class TokenInfoIcons {

    static async addOverlandButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        if (overland == 0)
            return;

        let overland = actor.adata.capabilities.Overland.value;
        let newdiv = '<div class ="chalkdiv">';

        let obutton = '<div class ="control-icon chalkicon" title = "Overland: ' + overland + '"><i class ="fas fa-shoeprintes"></i> ' + overland + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(obutton);
    }

    static async addSkyButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let sky = actor.adata.capabilities.Sky.value;

        if (sky == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let sbutton = '<div class ="control-icon chalkicon" title = "Sky: ' + sky + '"><i class="fa-solid fa-dove"></i> ' + sky + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(sbutton);
    }

    static async addSwimButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let swim = actor.adata.capabilities.Swim.value;

        if (swim == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let sbutton = '<div class ="control-icon chalkicon" title = "Swim: ' + swim + '"><i class="fa-solid fa-person-swimming"></i> ' + swim + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(sbutton);
    }

    static async addBurrowButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let burrow = actor.adata.capabilities.Burrow.value;

        if (burrow == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let bbutton = '<div class ="control-icon chalkicon" title = "Burrow: ' + burrow + '"><i class="fa-solid fa-shovel"></i> ' + burrow + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(bbutton);
    }

    static async addLevitateButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let lev = actor.adata.capabilities.Levitate.value;

        if (lev == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let lbutton = '<div class ="control-icon chalkicon" title = "Levitate: ' + lev + '"><i class="fa-brands fa-fly"></i> ' + lev + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(lbutton);
    }
}
Hooks.on('ready', () => {
    if (game.user.isGM) { //maybe change this to if (game.user.isGM || game.user.isOwner)
        //Overland
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addOverlandButton(app, html, data) });
        //Sky
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addSkyButton(app, html, data) });
        //Swim
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addSwimButton(app, html, data) });
        //Burrow
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addBurrowButton(app, html, data) });
        //Levitate
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addLevitateButton(app, html, data) });
    }
	
});
console.log("Token Info Icons loaded");