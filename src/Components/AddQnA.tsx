import React from "react";

const AddQnA = () => {
	return (
		<>
			<h2>Add QnA</h2>
			<div className="container-lg mt-3">
				<div className="row justify-content-center my-3">
					<div className="col-lg-6 text-start">
						<form>
							<div className="mb-3">
								<label htmlFor="question" className="form-label">
									Question
								</label>
								<input type="text" className="form-control" id="question" />
							</div>

							<div className="my-3">
								<label htmlFor="answer" className="form-label">
									Answer
								</label>
								<textarea rows={3} className="form-control" id="answer" />
							</div>

							<button type="submit" className="btn btn-primary btn-lg">
								Add QnA
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddQnA;