#pragma strict
var c1 : Color = Color.yellow;
var c2 : Color = Color.red;
var targets : GameObject[];
private var closestDistance : float = 90000000;
var start : Vector3;
var end : Vector3;
var currentTarget : Transform;
var percent: float;
var rayCastHit : RaycastHit;
var lineRenderer : LineRenderer;

function Start () {
	lineRenderer = gameObject.AddComponent(LineRenderer);
	lineRenderer.material = new Material (Shader.Find("Particles/Additive"));
	lineRenderer.SetColors(c1,c2);
	lineRenderer.SetWidth(0.2,0.2);
	
	
	start = gameObject.transform.position;

	end = currentTarget.position;
	
	lineRenderer.SetPosition(0,start);
	lineRenderer.SetPosition(1,end);
	
	percent = 0.0;
}

function Update () {
	targets = GameObject.FindGameObjectsWithTag("Laser Target");
	for (var target : GameObject in targets) {
	print(target.name);
		var distance = Vector3.Distance(start, target.transform.position);
		if (distance < closestDistance) {
			closestDistance = distance;
			currentTarget = target.transform;
		}
		end = currentTarget.position;
	}
	
	
	if(currentTarget != null){
	end = currentTarget.position;
	}
	percent = percent + Time.deltaTime/2;
	
	if(percent > 1){
		percent = 1;
	}
	if (Physics.Linecast(start, end, rayCastHit, (1 << 10))) {
		print("Target Hit");
	}
	lineRenderer.SetPosition(0,start);
	lineRenderer.SetPosition(1,Vector3.Lerp(start, end, percent));
	
	//Debug.Log(Time.deltaTime);
}