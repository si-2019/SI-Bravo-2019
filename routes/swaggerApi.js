  /**
* @swagger
* /category/get:
*    get:
*     tags:
*       - Kategorije
*     responses:
*       200:
*         description: Kategorija pronađena i uspješno dobavljena iz baze.
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             idCategory:
*               type: string
*         required:
*           - idCategory     
*/  




	/**
* @swagger
* /category/add:
*    post:
*     tags:
*       - Kategorije
*     responses:
*       200:
*         description: Nova kategorija uspješno dodana u bazu.
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             naziv:
*               type: string
*         required:
*           - naziv
*/


/**
* @swagger
* /issues:
*    get:
*     tags:
*       - Issues
*     responses:
*       200:
*         description: Uspješno vraćen response sa new, in progress i resolved nizovima issue-a.
*     consumes:
*       - application/json 
*     parameters:
*/



/**
* @swagger
* /frequentIssue/get:
*    get:
*     tags:
*       - frequentIssues
*     responses:
*       200:
*         description: Uspješno vraćen niz sa čestim Issue-ima.
*     consumes:
*       - application/json 
*     parameters:
*/

/**
* @swagger
* /frequentIssue/add:
*    post:
*     tags:
*       - frequentIssues
*     responses:
*       200:
*         description: Uspješno dodavanje novog frequentIssue u bazu.
*     consumes:
*       - application/json 
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             naziv:
*               type: string
*             tekst:
*               type: string
*         required:
*           - naziv
*           - tekst
*/


/**
* @swagger
* /message/get:
*    get:
*     tags:
*       - messageIssue
*     responses:
*       200:
*         description: Uspješno dobavljen lanac poruka vezan za dotični issue.
*     consumes:
*       - application/json 
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             idIssue:
*               type: string
*         required:
*           - idIssue
*/







