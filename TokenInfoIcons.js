class TokenInfoIcons {

    static async addOverlandButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;

	let overland = actor.data.data.capabilities.Overland;
        
        if (overland == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let obutton = '<div class ="control-icon chalkicon" title = "Overland: ' + overland + '"><i class ="fas fa-shoe-prints"></i> ' + overland + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(obutton);
    }

    static async addSkyButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let sky = actor.data.data.capabilities.Sky;

        if (sky == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let sbutton = '<div class ="control-icon chalkicon" title = "Sky: ' + sky + '"><i class="fas fa-feather"></i> ' + sky + '</div>';

        html.find('.attribute.target').wrap(newdiv);
        html.find('.attribute.target').before(sbutton);
    }

    static async addSwimButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let swim = actor.data.data.capabilities.Swim;

        if (swim == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let sbutton = '<div class ="control-icon chalkicon" title = "Swim: ' + swim + '"><i class="fas fa-swimmer"></i> ' + swim + '</div>';

        html.find('.attribute.elevation').wrap(newdiv);
        html.find('.attribute.elevation').before(sbutton);
    }

    static async addBurrowButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let burrow = actor.data.data.capabilities.Burrow;

        if (burrow == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let bbutton = '<div class ="control-icon chalkicon" title = "Burrow: ' + burrow + '"><i class="fas fa-shovel"></i> ' + burrow + '</div>';

        html.find('.control-icon.target').wrap(newdiv);
        html.find('.control-icon.target').before(bbutton);
    }

    static async addLevitateButton(app, html, data) {
        
        let actor = game.actors.get(data.actorId);
        if (actor === undefined)
            return;
        
        let lev = actor.data.data.capabilities.Levitate;

        if (lev == 0)
            return;

        let newdiv = '<div class ="chalkdiv">';

        let lbutton = '<div class ="control-icon chalkicon" title = "Levitate: ' + lev + '"><i class="fas fa-fly"></i> ' + lev + '</div>';

        html.find('.attribute.target').wrap(newdiv);
        html.find('.attribute.target').before(lbutton);
    }
}
Hooks.on('ready', () => {
    if (game.user.isGM) { //maybe change this to if (game.user.isGM || game.user.isOwner)
                
        //Swim
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addSwimButton(app, html, data) });
        //Burrow
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addBurrowButton(app, html, data) });
        //Levitate
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addLevitateButton(app, html, data) });
        //Sky
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addSkyButton(app, html, data) });
        //Overland
        Hooks.on('renderTokenHUD', (app, html, data) => { TokenInfoIcons.addOverlandButton(app, html, data) });
    }
	
});
console.log("Token Info Icons loaded");
